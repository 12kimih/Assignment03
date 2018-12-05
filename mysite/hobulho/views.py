from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import HobulhoSerializer
from .models import Hobulho

# Create your views here.
class UserHobulhoList(generics.ListAPIView):
    serializer_class = HobulhoSerializer

    def get_queryset(self):
        try:
            user = User.objects.get(username=self.kwargs['username'])
            return Hobulho.objects.all().filter(author=user)
        except ObjectDoesNotExist:
            return Hobulho.objects.none()
