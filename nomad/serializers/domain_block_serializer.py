"""
Domain block serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import DomainBlock
class DomainBlockSerializer(ModelSerializer):
    """
    Domain block serializer
    """
    class Meta:
        """
        Domain block serializer meta class
        """
        model = DomainBlock
        fields = '__all__'
        read_only_fields = (
            'id',
            'created_at',
            'updated_at'
        )
