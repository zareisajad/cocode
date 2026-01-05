from django.contrib import admin

from users.models.friend import FriendRequest
from users.models.profile import Profile, ProfileLink
from users.models.user import User

admin.site.register(User)
admin.site.register(ProfileLink)
admin.site.register(Profile)
admin.site.register(FriendRequest)

