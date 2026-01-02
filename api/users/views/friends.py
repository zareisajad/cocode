from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from users.models import FriendRequest

User = get_user_model()


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def send_friend_request(request):
    receiver_id = request.data.get("receiver_id")
    try:
        receiver = User.objects.get(id=receiver_id)
    except User.DoesNotExist:
        return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    fr, created = FriendRequest.objects.get_or_create(
        sender=request.user,
        receiver=receiver,
    )

    if not created:
        return Response({"detail": "Friend request already sent"}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"detail": "Friend request sent"}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def cancel_friend_request(request):
    receiver_id = request.data.get("receiver_id")
    try:
        fr = FriendRequest.objects.get(sender=request.user, receiver_id=receiver_id, accepted=False, rejected=False)
    except FriendRequest.DoesNotExist:
        return Response({"detail": "No pending friend request found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def accept_friend_request(request):
    sender_id = request.data.get("sender_id")
    try:
        fr = FriendRequest.objects.get(sender_id=sender_id, receiver=request.user, accepted=False, rejected=False)
    except FriendRequest.DoesNotExist:
        return Response({"detail": "Friend request not found"}, status=status.HTTP_404_NOT_FOUND)

    fr.accepted = True
    fr.save()
    return Response({"detail": "Friend request accepted"}, status=status.HTTP_200_OK)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def reject_friend_request(request):
    sender_id = request.data.get("sender_id")
    try:
        fr = FriendRequest.objects.get(sender_id=sender_id, receiver=request.user, accepted=False, rejected=False)
    except FriendRequest.DoesNotExist:
        return Response({"detail": "Friend request not found"}, status=status.HTTP_404_NOT_FOUND)

    fr.rejected = True
    fr.save()
    return Response({"detail": "Friend request rejected"}, status=status.HTTP_200_OK)
