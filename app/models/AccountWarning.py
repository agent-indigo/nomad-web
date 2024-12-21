from django.db import models
class AccountWarning(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  action = models.IntegerField
  text = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)