from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError

from .models import User


@api_view(["POST"])
@permission_classes([AllowAny])
def refresh_view(request):
    refresh_token = request.COOKIES.get("refresh")
    print(refresh_token, "hiiiiiiiiiiii")
    if not refresh_token:
        return Response(
            {"detail": "No refresh token"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    try:
        refresh = RefreshToken(refresh_token)
        access = refresh.access_token
        return Response(
            {"access": str(access)},
            status=status.HTTP_200_OK
        )
    except TokenError:
        return Response(
            {"detail": "Invalid refresh token"},
            status=status.HTTP_401_UNAUTHORIZED
        )


@api_view(["POST"])
@permission_classes([AllowAny])
def register_view(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response(
            {"detail": "Email and password are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(email=email).exists():
        return Response(
            {"detail": "User with this email already exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = User.objects.create_user(
        email=email,
        password=password,
    )

    refresh = RefreshToken.for_user(user)

    response = Response(
        {
            "access": str(refresh.access_token),
            "user": {
                "id": user.id,
                "email": user.email,
            },
        },
        status=status.HTTP_201_CREATED
    )

    response.set_cookie(
        key="refresh",
        value=str(refresh),
        httponly=True,
        secure=False,
        samesite="None",
        max_age=7 * 24 * 60 * 60,
    )

    return response



@api_view(["POST"])
@permission_classes([AllowAny])
def login_view(request):
    email = request.data.get("email")
    password = request.data.get("password")
    print(email, password)
    if not email or not password:
        return Response(
            {"detail": "email and password required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = authenticate(email=email, password=password)
    if not user:
        return Response(
            {"detail": "Invalid credentials"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    refresh = RefreshToken.for_user(user)
    print("refresh", refresh)
    response = Response(
        {
            "access": str(refresh.access_token),
            "user": {
                "id": user.id,
                "email": user.email,
            },
        },
        status=status.HTTP_200_OK
    )
    print("resonse", response)

    response.set_cookie(
        key="refresh",
        value=str(refresh),
        httponly=True,
        secure=False,
        samesite="Lax",
        max_age=7 * 24 * 60 * 60,
    )
    print(response.cookies)
    return response



@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_view(request):
    response = Response(
        {"detail": "Logged out"},
        status=status.HTTP_200_OK
    )
    response.delete_cookie("refresh")
    return response

