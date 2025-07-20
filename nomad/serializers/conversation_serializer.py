"""
Conversation serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Conversation
class ConversationSerializer(ModelSerializer):
    """
    Conversation serializer
    """

    class Meta:
        """
        Conversation serializer meta class
        """
        model = Conversation
        fields = '__all__'
        read_only_fields = '__all__'
