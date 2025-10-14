"""
Poll vote setializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import PollVote
class PollVoteSerializer(ModelSerializer):
    """
    Poll vote serializer
    """
    class Meta:
        """
        Poll vote serializer meta class
        """
        model = PollVote
        fields = '__all__'
        read_only_fields = [
            'id',
            'post',
            'actor',
            'uri',
            'created_at',
            'updated_at'
        ]
