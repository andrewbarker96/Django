from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import MyModel
from .forms import MyForm
from .serializers import MyModelSerializer
from django.shortcuts import render


def home(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


from .models import MyModel  # Import the MyModel class from the models module


class MyModelListCreateView(generics.ListCreateAPIView):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

    def perform_create(self, serializer):
        serializer.save(
            field1=self.request.data["field1"], field2=self.request.data["field2"]
        )
