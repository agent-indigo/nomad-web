"""
Follow request serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import FollowRequest
class FollowRequestSerializer(ModelSerializer):
    """
    Follow request serializer
    """
    class Meta:
        """
        Follow request serializer meta class
        """
        model = FollowRequest
        fields = '__all__'
        read_only_fields = '__all__'
