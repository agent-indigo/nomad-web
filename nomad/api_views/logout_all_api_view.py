"""
Logout all API View
"""
from urllib.request import Request
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import logout
from django.contrib.sessions.models import Session
from django.utils import timezone
class LogoutAllApiView(GenericAPIView):
    """
    Logout all API View
    """
    permission_classes = [
        IsAuthenticated
    ]
    def post(
        self,
        request: Request
    ):
        """
        Logout all request handler
        """
        Session.objects.filter(
            expire_date__gte = timezone.now(),
            session_key__in = [
                key for key, data in Session.objects.filter(
                    expire_date__gte = timezone.now()
                ).values_list(
                    'session_key',
                    'session_data'
                )
                if data.get('_auth_user_id') == str(request.user.id)
            ]
        ).delete()
        logout(request)
        return Response({
            'message': 'Logged out from all sessions.'
        })
