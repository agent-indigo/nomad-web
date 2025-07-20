"""
Post stats serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import PostStats
class PostStatsSerializer(ModelSerializer):
    """
    Post stats serializer
    """
    class Meta:
        """
        Post stats serializer meta class
        """
        model = PostStats
        fields = '__all__'
        read_only_fields = (
            'id',
            'post_id',
            'created_at',
            'updated_at'
        )
