"""
Actor conversation serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models.actor_conversation_sql_model import ActorConversation
class ActorConversationSerializer(ModelSerializer):
    """
    Actor conversation serializer
    """
    class Meta:
        """
        Actor conversation serializer meta class
        """
        model = ActorConversation
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'conversation_id',
            'created_at',
            'updated_at'
        )
