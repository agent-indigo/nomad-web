"""
Report serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Report
class ReportSerializer(ModelSerializer):
    """
    Report serializer
    """
    class Meta:
        """
        Report serializer meta class
        """
        model = Report
        fields = '__all__'
        read_only_fields = [
            'id',
            'actor_id',
            'target_actor_id',
            'action_taken_by_account_id',
            'post_ids',
            'uri',
            'created_at',
            'updated_at'
        ]
