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
            'actor',
            'target_actor',
            'action_taken_by_account',
            'post_ids',
            'uri',
            'created_at',
            'updated_at'
        ]
