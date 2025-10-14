"""
Follow serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Follow
class FollowSerializer(ModelSerializer):
    """
    Follow serializer
    """
    class Meta:
        """
        Follow serializer meta class
        """
        model = Follow
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor',
            'target_actor',
            'uri',
            'created_at',
            'updated_at'
        ]
