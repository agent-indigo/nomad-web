from django.db import models
class MediaAttachment(models.Model):
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='media_attachments',
    blank=True
  )
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='media_attachments',
    blank=True
  )
  scheduled_status_id = models.ForeignKey(
    'ScheduledStatus',
    on_delete=models.DO_NOTHING,
    related_name='media_attachments',
    blank=True
  )
  shortcode = models.TextField(
    unique=True,
    blank=True
  )
  remote_url = models.URLField
  type = models.TextField
  file_file_name = models.TextField(blank=True)
  file_file_size = models.PositiveBigIntegerField(blank=True)
  file_mate = models.TextField
  description = models.TextField(blank=True)
  blurhash = models.TextField(blank=True)
  file_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)