from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = UserManager() 

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email


    def save(self, *args, **kwargs):
        if not self.username and self.email:
            username = self.email.split("@")[0]
            self.username = username
        super().save(*args, **kwargs)

