"""
Tag serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Tag
class TagSerializer(ModelSerializer):
    """
    Tag serializer
    """
    class Meta:
        """
        Tag serializer meta class
        """
        model = Tag
        fields = '__all__'
        read_only_fields = (
            'id',
            'created_at',
            'updated_at'
        )
