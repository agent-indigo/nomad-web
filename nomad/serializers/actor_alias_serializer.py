"""
Actor alias serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models.actor_alias_sql_model import ActorAlias
class ActorAliasSerializer(ModelSerializer):
    """
    Actor alias serializer
    """
    class Meta:
        """
        Actor alias serializer meta class
        """
        model = ActorAlias
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'created_at',
            'updated_at'
        )
