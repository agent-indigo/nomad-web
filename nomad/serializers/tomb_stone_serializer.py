"""
Tomb stone serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import TombStone
class TombStoneSerializer(ModelSerializer):
    """
    Tomb stome serializer
    """
    class Meta:
        """
        Tomb stone serializer meta class
        """
        model = TombStone
        fields = '__all__'
        read_only_fields = '__all__'
