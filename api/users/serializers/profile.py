from rest_framework import serializers
from django.contrib.auth import get_user_model 
from django.db.models import Q

from users.models import Profile, ProfileLink, FriendRequest 
from users.utils import friends

User = get_user_model()


class ProfileLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileLink
        fields = ["id", "label", "url"]


class ProfileSerializer(serializers.ModelSerializer):
    links = ProfileLinkSerializer(many=True)

    class Meta:
        model = Profile
        fields = ["public_name", "avatar", "bio", "links"]


class MeSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    friends_count = serializers.SerializerMethodField()
    pending_requests_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "profile",
            "friends_count",
            "pending_requests_count",
        ]


    def get_friends_count(self, obj):
        return friends(obj).count()

    def get_pending_requests_count(self, obj):
        return FriendRequest.objects.filter(
            receiver=obj,
            accepted=False,
            rejected=False
        ).count()


class PublicProfileSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    friends_count = serializers.SerializerMethodField()
    is_friend = serializers.SerializerMethodField()
    request_sent = serializers.SerializerMethodField()
    request_received = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "profile",
            "friends_count",
            "is_friend",
            "request_sent",
            "request_received",
        ]


    def get_friends_count(self, obj):
        return friends(obj).count()

    def get_is_friend(self, obj):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            return FriendRequest.objects.filter(
                Q(sender=request.user, receiver=obj) | Q(sender=obj, receiver=request.user),
                accepted=True
            ).exists()
        return False

    def get_request_sent(self, obj):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            return FriendRequest.objects.filter(
                sender=request.user,
                receiver=obj,
                accepted=False,
                rejected=False
            ).exists()
        return False

    def get_request_received(self, obj):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            return FriendRequest.objects.filter(
                sender=obj,
                receiver=request.user,
                accepted=False,
                rejected=False
            ).exists()
        return False
