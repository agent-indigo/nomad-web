"""
Mute serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Mute
class MuteSerializer(ModelSerializer):
    """
    Mute serializer
    """
    class Meta:
        """
        Mute serializer meta class
        """
        model = Mute
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor',
            'target_actor',
            'created_at',
            'updated_at'
        ]
