from rest_framework import serializers
from users.models import FriendRequest
from django.contrib.auth import get_user_model

User = get_user_model()

class FriendRequestSerializer(serializers.ModelSerializer):
    sender = serializers.PrimaryKeyRelatedField(read_only=True)
    receiver_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = FriendRequest
        fields = ["id", "sender", "receiver_id", "accepted", "rejected"]

    def validate_receiver_id(self, value):
        user = self.context['request'].user
        if value == user.id:
            raise serializers.ValidationError("Cannot send friend request to yourself.")
        return value

