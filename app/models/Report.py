from django.db import models
class Report(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  action_taken_by_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  assigned_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  status_ids = [models.TextField]
  comment = models.TextField
  action_taken = models.BooleanField(default=False)
  uri = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)