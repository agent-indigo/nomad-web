"""
Actor migration serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models.actor_migration_sql_model import ActorMigration
class ActorMigrationSerializer(ModelSerializer):
    """
    Actor migration serializer
    """
    class Meta:
        """
        Actor migration serializer meta class
        """
        model = ActorMigration
        fields = '__all__'
        read_only_fields = '__all__'
