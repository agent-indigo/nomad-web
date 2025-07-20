"""
Announcement serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Announcement
class AnnouncementSerializer(ModelSerializer):
    """
    Serializer for Announcement model
    """
    class Meta:
        """
        Announcement serializer meta class
        """
        model = Announcement
        fields = '__all__'
        read_only_fields = (
            'id',
            'created_at',
            'updated_at'
        )
