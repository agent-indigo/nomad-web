from django.db import models
class Invite(models.Model):
  user_id = models.OneToOneField(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='invite'
  )
  code = models.TextField(unique=True)
  used = models.BooleanField(default=False)
  autofollow = models.BooleanField(default=True)
  expires_at = models.DateTimeField(blank=True)
  comment = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)