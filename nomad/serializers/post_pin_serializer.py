"""
Post pin serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import PostPin
class PostPinSerializer(ModelSerializer):
    """
    Post pin serializer
    """
    class Meta:
        """
        Post pin serializer meta class
        """
        model = PostPin
        fields = '__all__'
        read_only_fields = '__all__'
