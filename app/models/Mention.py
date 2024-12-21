from django.db import models
class Mention(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='mentions'
  )
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='mentions'
  )
  silent = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)