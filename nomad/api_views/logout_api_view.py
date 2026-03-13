"""
Logout API View
"""
from urllib.request import Request
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import logout
class LogoutApiView(GenericAPIView):
    """
    Logout API View
    """
    permission_classes = [
        IsAuthenticated
    ]
    def post(
        self,
        request: Request
    ):
        """
        Logout request handler
        """
        logout(request)
        return Response({
            'message': 'Logged out from current session.'
        })
