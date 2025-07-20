"""
List actor serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import ListActor
class ListActorSerializer(ModelSerializer):
    """
    List actor serializer
    """
    class Meta:
        """
        List actor serializer meta class
        """
        model = ListActor
        fields = '__all__'
        read_only_fields = '__all__'
