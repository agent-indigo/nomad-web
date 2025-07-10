from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from serializers import UserSerializer
class CurrentUserApiView(RetrieveAPIView):
  permission_classes = [
    IsAuthenticated,
  ]
  serializer_class = UserSerializer
  def get_object(self: 'CurrentUserApiView') -> UserSerializer:
    return self.request.user