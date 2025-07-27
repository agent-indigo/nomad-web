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
            'actor_id',
            'target_actor_id',
            'uri',
            'created_at',
            'updated_at'
        ]
