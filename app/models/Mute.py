from django.db import models
class Mute(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  hide_notifications = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)