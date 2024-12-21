from django.db import models
from app.settings import DEFAULT_INVITE_USES, DEFAULT_INVITE_MAX_USES
class Invite(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING
  )
  code = models.TextField(unique=True)
  uses = models.IntegerField(default=DEFAULT_INVITE_USES)
  autofollow = models.BooleanField(default=True)
  expires_at = models.DateTimeField(blank=True)
  max_uses = models.IntegerField(
    blank=True,
    default=DEFAULT_INVITE_MAX_USES
  )
  comment = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)