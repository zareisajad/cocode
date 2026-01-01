from django.urls import path

from users.views.profile import me_view, public_profile_view
from users.views.friends import send_friend_request, cancel_friend_request,\
    accept_friend_request, reject_friend_request

app_name = "users"

urlpatterns = [
    path("me/", me_view, name="me_view"),
    path("<str:username>/", public_profile_view, name="public_profile_view"),    
    path("friends/send/", send_friend_request, name="send_friend_request"),
    path("friends/cancel/",cancel_friend_request, name="cancel_friend_request"),
    path("friends/accept/", accept_friend_request, name="accept_friend_request"),
    path("friends/reject/", reject_friend_request, name="reject_friend_request"),
]
