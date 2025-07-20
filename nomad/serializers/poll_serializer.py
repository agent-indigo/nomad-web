"""
Poll serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Poll
class PollSerializer(ModelSerializer):
    """
    Poll serializer
    """
    class Meta:
        """
        Poll serializer meta class
        """
        model = Poll
        fields = '__all__'
        read_only_fields = (
            'id',
            'post_id',
            'actor_id',
            'created_at',
            'updated_at'
        )
