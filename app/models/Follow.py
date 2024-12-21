from django.db import models
class Follow(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  show_reblogs = models.BooleanField(default=True)
  uri = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)