from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from users.serializers.profile import MeSerializer, PublicProfileSerializer 
from rest_framework import status

User = get_user_model()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me_view(request):
    """
    Return the logged-in user's full profile data for the frontend.
    Includes profile info, links, settings, follower/following counts.
    """
    serializer = MeSerializer(request.user)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def public_profile_view(request, username):
    """
    Return public profile data for username.
    Includes profile info, links, follower/following counts
    """
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = PublicProfileSerializer(user, context={"request": request})
    return Response(serializer.data)
