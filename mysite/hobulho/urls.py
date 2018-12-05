from django.urls import path
from .views import UserHobulhoList

urlpatterns = [
    path('<str:username>/', UserHobulhoList.as_view()),
]
