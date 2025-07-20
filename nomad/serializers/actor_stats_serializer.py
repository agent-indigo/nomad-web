"""
Actor stats serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import ActorStats
class ActorStatsSerializer(ModelSerializer):
    """
    Actor stats serializer
    """
    class Meta:
        """
        Actor stats serializer meta class
        """
        model = ActorStats
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'created_at',
            'updated_at'
        )
