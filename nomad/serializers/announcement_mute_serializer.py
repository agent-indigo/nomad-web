"""
Announcement mute serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import AnnouncementMute
class AnnouncementMuteSerializer(ModelSerializer):
    """
    Announcement mute serializer
    """
    class Meta:
        """
        Announcement mute serializer meta class
        """
        model = AnnouncementMute
        fields = '__all__'
        read_only_fields = '__all__'
