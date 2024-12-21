from django.db import models
class StatusPin(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='pinned_statuses'
  )
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='pins'
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)