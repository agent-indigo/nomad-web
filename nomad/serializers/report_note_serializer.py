"""
Report note serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import ReportNote
class ReportNoteSerializer(ModelSerializer):
    """
    Report note serializer
    """
    class Meta:
        """
        Report note serializer meta class
        """
        model = ReportNote
        fields = '__all__'
        read_only_fields = '__all__'
