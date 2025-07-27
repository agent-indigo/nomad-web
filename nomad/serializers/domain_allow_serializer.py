"""
Domain allow serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import DomainAllow
class DoaminAllowSerializer(ModelSerializer):
    """
    Domain allow serializer
    """
    class Meta:
        """
        Domain allow serializer meta class
        """
        model = DomainAllow
        fields = '__all__'
        read_only_fields = [
            'id',
            'created_at',
            'updated_at'
        ]
