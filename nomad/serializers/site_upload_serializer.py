"""
Site upload serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import SiteUpload
class SiteUploadSerializer(ModelSerializer):
    """
    Site upload serializer
    """
    class Meta:
        """
        Site upload serializer meta class
        """
        model = SiteUpload
        fields = '__all__'
        read_only_fields = '__all__'
