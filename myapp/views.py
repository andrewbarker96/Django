from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse(
        "<h1>Welcome to the Home Page</h1><a href='/about/'>About</a> | <a href='/contact/'>Contact</a>"
    )


def about(request):
    return HttpResponse(
        "<h1>About Me</h1><a href='/'>Home</a> | <a href='/contact/'>Contact</a>"
    )


@api_view(["GET", "POST"])
def contact(request):
    if request.method == "GET":
        return Response(
            {"message": "Contact Us", "links": {"home": "/", "about": "/about/"}}
        )
    elif request.method == "POST":
        # Handle form submission logic here if needed
        return Response(
            {"message": "Form submitted successfully"}, status=status.HTTP_201_CREATED
        )
