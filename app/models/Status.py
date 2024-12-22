from django.db import models
class Status(models.Model):
  class Meta:
    db_table = 'statuses'
    verbose_name = 'Status'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='statuses'
  )
  in_reply_to_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='replies',
    blank=True
  )
  reblog_of_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='reblogs',
    blank=True
  )
  in_reply_to_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='replies',
    blank=True
  )
  uri = models.TextField(
    unique=True,
    blank=True
  )
  visibility = models.PositiveBigIntegerField(db_index=True)
  text = models.TextField
  sensitive = models.BooleanField(default=False)
  spoiler_text = models.BooleanField(default=False)
  reply = models.BooleanField(default=False)
  url = models.URLField
  language = models.TextField(blank=True)
  conversation_id = models.TextField(blank=True)
  poll_id = models.TextField(blank=True)
  deleted_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)