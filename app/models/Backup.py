from django.db import models
class Backup(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  processed = models.BooleanField(default=False)
  dump_file_name = models.TextField(blank=True)
  dump_content_type = models.TextField(blank=True)
  dump_file_size = models.PositiveBigIntegerField(blank=True)
  dump_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)