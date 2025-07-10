from urllib.request import Request
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from knox.models import AuthToken
from serializers import LogInSerializer, UserSerializer
class LogInApiView(GenericAPIView):
  serializer_class = LogInSerializer
  def post(
    self: 'LogInApiView',
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
    user = serializer.validated_data
    return Response({
      'user': UserSerializer(
        user,
        context = self.get_serializer_context()
      ).data,
      'token': AuthToken.objects.create(user)[1]
    })