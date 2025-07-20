"""
Custom emoji category serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import CustomEmojiCategory
class CustomEmojiCategorySetializer(ModelSerializer):
    """
    Custom emoji category serializer
    """
    class Meta:
        """
        Custom emoji category serialize meta class
        """
        model = CustomEmojiCategory
        fields = '__all__'
        read_only_fields = (
            'id',
            'actor_id',
            'created_at',
            'updated_at'
        )
