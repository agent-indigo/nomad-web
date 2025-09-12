"""
Actor serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Actor
class ActorSerializer(ModelSerializer):
    """
    Actor Serializer
    """
    class Meta:
        """
        Actor serializer meta class
        """
        model = Actor
        fields = [
            'id',
            'username',
            'display_name',
            'note',
            'fields',
            'actor_type',
            'uri',
            'url',
            'public_key',
            'protocol',
            'is_memorial',
            'inbox_url',
            'shared_inbox_url',
            'outbox_url',
            'followers_url',
            'featured_collections_url',
            'salmon_url',
            'hub_url',
            'domain',
            'avatar_remote_url',
            'header_remote_url',
            'created_at',
            'updated_at'
        ]
        read_only_fields = [
            'id',
            'created_at',
            'updated_at'
        ]
