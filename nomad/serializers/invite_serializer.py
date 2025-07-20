"""
Invite serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Invite
class InviteSerializer(ModelSerializer):
    """
    Invite serializer
    """
    class Meta:
        """
        Invite serializer meta class
        """
        model = Invite
        fields = '__all__'
        read_only_fields = (
            'id',
            'user_id',
            'code',
            'created_at',
            'updated_at'
        )
