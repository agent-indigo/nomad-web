from django.db import models
class ScheduledStatus(models.Model):
  class Meta:
    db_table = 'scheduled_statuses'
    verbose_name = 'Scheduled status'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='scheduled_statuses',
    blank=True
  )
  scheduled_at = models.DateTimeField(
    db_index=True,
    blank=True
  )
  params = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)