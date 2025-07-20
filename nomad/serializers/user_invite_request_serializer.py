"""
User invite request serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import UserInvite
class UserInviteSerializer(ModelSerializer):
    """
    User invite request serializer
    """
    class Meta:
        """
        User invite request serializer meta class
        """
        model = UserInvite
        fields = '__all__'
        read_only_fields = (
            'id',
            'user_id',
            'created_at',
            'updated_at'
        )
