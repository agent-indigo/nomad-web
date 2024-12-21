from django.db import models
class Status(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  in_reply_to_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  reblog_of_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  in_reply_to_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
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