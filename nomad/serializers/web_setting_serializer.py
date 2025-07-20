"""
Web setting serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import WebSetting
class WebSettingSerializer(ModelSerializer):
    """
    Web setting serializer
    """
    class Meta:
        """
        Web setting serializer meta class
        """
        model = WebSetting
        fields = '__all__'
        read_only_fields = (
            'id',
            'user_id',
            'created_at',
            'updated_at'
        )
