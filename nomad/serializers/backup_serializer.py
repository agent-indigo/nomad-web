"""
Backup serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Backup
class BackupSerializer(ModelSerializer):
    """
    Backup serializer
    """
    class Meta:
        """
        Backup serializer meta class
        """
        model = Backup
        fields = '__all__'
        read_only_fields = [
            'id',
            'user_id',
            'is_processed',
            'created_at',
            'updated_at'
        ]
