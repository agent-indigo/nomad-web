"""
Post serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Post
class PostSerializer(ModelSerializer):
    """
    Post serializer
    """
    class Meta:
        """
        Post serializer meta class
        """
        model = Post
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor',
            'in_reply_to_actor',
            'in_reply_to_post',
            'reblog_of_post',
            'conversation',
            'poll',
            'uri',
            'url',
            'is_reply',
            'created_at',
            'updated_at'
        ]
