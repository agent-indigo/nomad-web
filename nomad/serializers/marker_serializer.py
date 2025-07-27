"""
Marker serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Marker
class MarkerSerializer(ModelSerializer):
    """
    Marker serializer
    """
    class Meta:
        """
        Marker serializer meta class
        """
        model = Marker
        fields = '__all__'
        read_only_fields = [
            'id',
            'user_id',
            'created_at',
            'updated_at'
        ]
