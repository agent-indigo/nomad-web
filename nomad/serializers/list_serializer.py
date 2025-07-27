"""
List serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import List
class ListSerializer(ModelSerializer):
    """
    List serializer
    """
    class Meta:
        """
        List serializer meta class
        """
        model = List
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor_id',
            'created_at',
            'updated_at'
        ]
