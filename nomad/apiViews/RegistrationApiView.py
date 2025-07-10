from urllib.request import Request
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from knox.models import AuthToken
from serializers import RegistrationSerializer, UserSerializer
class RegistrationApiView(GenericAPIView):
  serializer_class = RegistrationSerializer
  def post(
    self: 'RegistrationApiView',
    request: Request,
    *args: tuple,
    **kwargs: dict[
      str,
      object
    ]
  ) -> Response:
    serializer = self.get_serializer(
      data = request.data
    )
    serializer.is_valid(
      raise_exception = True
    )
    user = serializer.save()
    return Response({
      'user': UserSerializer(
        user,
        context = self.get_serializer_context()
      ).data,
      'token': AuthToken.objects.create(user)[1]
    })