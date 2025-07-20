"""
Import serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Import
class ImportSerializer(ModelSerializer):
    """
    Import serializer
    """
    class Meta:
        """
        Import serializer meta class
        """
        model = Import
        fields = '__all__'
        read_only_fields = '__all__'
