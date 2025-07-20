"""
Admin action log serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import AdminActionLog
class AdminActionLogSerializer(ModelSerializer):
    """
    Admin action log serializer
    """
    class Meta:
        """
        Admin action log serializer meta class
        """
        model = AdminActionLog
        fields = '__all__'
        read_only_fields = '__all__'
