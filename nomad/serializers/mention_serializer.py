"""
Mention serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Mention
class MentionSerializer(ModelSerializer):
    """
    Mention serializer
    """
    class Meta:
        """
        Mention serializer meta class
        """
        model = Mention
        fields = '__all__'
        read_only_fields = '__all__'
