"""
Setting serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Setting
class SettingSerializer(ModelSerializer):
    """
    Setting serializer
    """
    class Meta:
        """
        Setting serializer meta class
        """
        model = Setting
        fields = '__all__'
        read_only_fields = [
            'id',
            'created_at',
            'updated_at'
        ]
