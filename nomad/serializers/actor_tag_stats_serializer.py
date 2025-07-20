"""
Actor tag stats serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import ActorTagStats
class ActorTagStatsSerializer(ModelSerializer):
    """
    Actor tag stats serializer
    """
    class Meta:
        """
        Actor tag stats serializer meta class
        """
        model = ActorTagStats
        fields = '__all__'
        read_only_fields = (
            'id',
            'tag_id',
            'created_at',
            'updated_at'
        )
