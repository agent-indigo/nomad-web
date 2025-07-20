"""
Actor domain block serializer.
"""
from rest_framework.serializers import ModelSerializer
from ..models.actor_domain_block_sql_model import ActorDomainBlock
class ActorDomainBlockSerializer(ModelSerializer):
    """
    Actor domain block serializer.
    """
    class Meta:
        """
        Actor domain block serializer meta class
        """
        model = ActorDomainBlock
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'created_at',
            'updated_at'
        )
