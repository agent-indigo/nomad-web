"""
Relay serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Relay
class RelaySerializer(ModelSerializer):
    """
    Relay serializer
    """
    class Meta:
        """
        Relay serializer meta class
        """
        model = Relay
        fields = '__all__'
        read_only_fields = [
            'id',
            'inbox_url',
            'follow_activity',
            'created_at',
            'updated_at'
        ]
