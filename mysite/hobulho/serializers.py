from .models import Hobulho
from rest_framework import serializers

class HobulhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobulho
        fields = ('subject', 'choice')
