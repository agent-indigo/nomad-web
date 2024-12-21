from django.db import models
class Report(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='filed_reports'
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='in_reports'
  )
  action_taken_by_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='actioned_reports',
    blank=True
  )
  assigned_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='assigned_reports',
    blank=True
  )
  status_ids = [models.TextField]
  comment = models.TextField
  action_taken = models.BooleanField(default=False)
  uri = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)