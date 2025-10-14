"""
Announcement reaction serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import AnnouncementReaction
class AnnouncementReactionSerializer(ModelSerializer):
    """
    Announcement reaction serializer
    """
    class Meta:
        """
        Announcement reaction serializer meta class
        """
        model = AnnouncementReaction
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor',
            'announcement',
            'created_at',
            'updated_at'
        ]
