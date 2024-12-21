from django.db import models
class Invite(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING
  )
  code = models.TextField(unique=True)
  uses = models.PositiveBigIntegerField(default=0)
  autofollow = models.BooleanField(default=True)
  expires_at = models.DateTimeField(blank=True)
  max_uses = models.PositiveBigIntegerField(
    blank=True,
    default=1
  )
  comment = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)