"""
Custom filter serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import CustomFilter
class CustomFilterSerializer(ModelSerializer):
    """
    Custom filter serializer
    """
    class Meta:
        """
        Custom filter serializer meta class
        """
        model = CustomFilter
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor_id',
            'created_at',
            'updated_at'
        ]
