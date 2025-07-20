"""
Favourite serializer
"""
from rest_framework.serializers import ModelSerializer
from ..models import Favourite
class FavouriteSeriazer(ModelSerializer):
    """
    Favourite serializer
    """
    class Meta:
        """
        Favourite serializer meta class
        """
        model = Favourite
        fields = '__all__'
        read_only_fields = '__all__'
