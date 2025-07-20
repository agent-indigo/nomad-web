"""
Email domain block serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import EmailDomainBlock
class EmailDomainBlockSerializer(ModelSerializer):
    """
    Email domain block serializer
    """
    class Meta:
        """
        Email domain block serializer meta class
        """
        model = EmailDomainBlock
        fields = '__all__'
        read_only_fields = (
            'id',
            'created_at',
            'updated_at'
        )
