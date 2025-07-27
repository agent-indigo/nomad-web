"""
Custom emoji serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import CustomEmoji
class CustomEmojiSerializer(ModelSerializer):
    """
    Custom emoji serializer
    """
    class Meta:
        """
        Custom emoji serializer meta class
        """
        model = CustomEmoji
        fields = '__all__'
        read_only_fields = [
            'id',
            'category_id',
            'short_code',
            'domain',
            'image_file_name',
            'image_content_type',
            'image_file_size',
            'image_remote_url',
            'image_uploaded_at',
            'uri',
            'created_at',
            'updated_at',
        ]
