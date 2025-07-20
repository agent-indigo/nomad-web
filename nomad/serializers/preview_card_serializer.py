"""
Preview card serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import PreviewCard
class PreviewCardSerializer(ModelSerializer):
    """
    Preview card serializer
    """
    class Meta:
        """
        Preview card serializer meta class
        """
        model = PreviewCard
        fields = '__all__'
        read_only_fields = '__all__'
