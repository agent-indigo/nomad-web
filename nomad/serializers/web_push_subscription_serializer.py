"""
Web push subscription serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import WebPushSubscription
class WebPushSubscriptionSerializer(ModelSerializer):
    """
    Web push subscription serializer
    """
    class Meta:
        """
        Web push subscription serializer meta class
        """
        model = WebPushSubscription
        fields = '__all__'
        read_only_fields = (
            'id',
            'user_id',
            'endpoint',
            'created_at',
            'updated_at'
        )
