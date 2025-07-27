"""
Media attachment serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import MediaAttachment
class MediaAttachmentSerializer(ModelSerializer):
    """
    Media attachment serializer
    """
    class Meta:
        """
        Media attachment serializer meta class
        """
        model = MediaAttachment
        fields = '__all__'
        read_only_fields = [
            'id',
            'post_id',
            'actor_id',
            'short_code',
            'remote_url',
            'blur_hash',
            'file_name',
            'file_meta_data',
            'file_content_type',
            'file_size',
            'created_at',
            'updated_at'
        ]
