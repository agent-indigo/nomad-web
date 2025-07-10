from rest_framework.serializers import CharField, Serializer, ValidationError
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
class LogInSerializer(Serializer):
  username = CharField()
  password = CharField()
  def validate(
    self: 'LogInSerializer',
    data: dict[
      str,
      str
    ]
  ) -> User:
    user = authenticate(**data)
    if user and user.is_active:
      return user
    else:
      raise ValidationError(
        'Invalid credentials.'
      )