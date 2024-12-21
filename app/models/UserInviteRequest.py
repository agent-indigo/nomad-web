from django.db import models
class UserInviteRequest(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='invite_requests',
    blank=True
  )
  text = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)