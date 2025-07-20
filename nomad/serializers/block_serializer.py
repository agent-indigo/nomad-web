"""
Block serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Block
class BlockSerializer(ModelSerializer):
    """
    Block serializer
    """
    class Meta:
        """
        Block serializer meta class
        """
        model = Block
        fields = '__all__'
        read_only_fields = '__all__'
