"""
Actor moderation note serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models.actor_moderation_note_sql_model import ActorModerationNote
class ActorModerationNoteSerializer(ModelSerializer):
    """
    Actor moderation note serializer
    """
    class Meta:
        """
        Actor moderation note serializer meta class
        """
        model = ActorModerationNote
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'target_actor_id',
            'created_at',
            'updated_at'
        )
