"""
Actor warning preset serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import ActorWarningPreset
class ActorWarningPresetSerializer(ModelSerializer):
    """
    Actor warning preset serializer
    """
    class Meta:
        """
        Actor warning preset serializer meta class
        """
        model = ActorWarningPreset
        fields = '__all__'
        read_only_fields = [
            'id',
            'created_at',
            'updated_at'
        ]
