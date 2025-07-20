"""
Bookmark serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Bookmark
class BookmarkSerializer(ModelSerializer):
    """
    Bookmark serializer
    """
    class Meta:
        """
        Bookmark serializer meta class
        """
        model = Bookmark
        fields = '__all__'
        read_only_fields = '__all__'
