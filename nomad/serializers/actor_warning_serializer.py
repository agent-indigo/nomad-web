"""
Actor warning serializer.
"""
from rest_framework.serializers import ModelSerializer
from ..models.actor_warning_sql_model import ActorWarning
class ActorWarningSerializer(ModelSerializer):
    """
    Actor warning serializer
    """
    class Meta:
        """
        Actor warning serializer meta class
        """
        model = ActorWarning
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'target_actor_id',
            'created_at',
            'updated_at'
        )
