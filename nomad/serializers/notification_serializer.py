"""
Notification serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Notification
class NotificationSerializer(ModelSerializer):
    """
    Notification serializer
    """
    class Meta:
        """
        Notification serializer meta class
        """
        model = Notification
        fields = '__all__'
        ready_only_fields = '__all__'
