"""
Actor pin serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import ActorPin
class ActorPinSerializer(ModelSerializer):
    """
    Actor pin serializer
    """
    class Meta:
        """
        Actor pin serializer meta class
        """
        model = ActorPin
        fields = '__all__'
        read_only_fields = '__all__'
