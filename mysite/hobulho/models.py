from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Hobulho(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.CharField(max_length=80)
    choice = models.CharField(max_length=10)
