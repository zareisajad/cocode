from django.urls import path

from . import views

app_name = "authentication"


urlpatterns = [
    path("login/", views.login_view, name="login_view"),
    path("register/", views.register_view, name="register_view"),
    path("logout/", views.logout_view, name="logout_view"),
    path("refresh/", views.refresh_view, name="refresh_view"),

]
