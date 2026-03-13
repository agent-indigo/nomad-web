"""
Registration API View
"""
from urllib.request import Request
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from django.contrib.auth import login
from ..serializers import UserSerializer
class RegistrationApiView(GenericAPIView):
    """
    Registration API View
    """
    serializer_class = UserSerializer
    def post(
        self,
        request: Request
    ):
        """
        Registration request handler
        """
        serializer = self.get_serializer(
            data = request.data
        )
        serializer.is_valid(
            raise_exception = True
        )
        user = serializer.save()
        login(
            request,
            user
        )
        return Response({
            'user': UserSerializer(
                user,
                context = self.get_serializer_context()
            ).data
        })
