from django.urls import path, include
from .views import MyModelListCreateView
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path('mymodel/', MyModelListCreateView.as_view(), name='mymodel-list-create'),
]
