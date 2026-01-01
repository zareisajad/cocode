from django.db.models import Q
from django.contrib.auth import get_user_model

User = get_user_model()

def friends(user):
    return User.objects.filter(
        Q(sent_requests__receiver=user, sent_requests__accepted=True) |
        Q(received_requests__sender=user, received_requests__accepted=True)
    ).distinct()

