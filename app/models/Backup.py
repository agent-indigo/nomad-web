from django.db import models
class Backup(models.Model):
  class Meta:
    db_table = 'backups'
    verbose_name = 'Backup'
    verbose_name_plural = f'{verbose_name}s'
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='backups',
    blank=True
  )
  processed = models.BooleanField(default=False)
  dump_file_name = models.TextField(blank=True)
  dump_content_type = models.TextField(blank=True)
  dump_file_size = models.PositiveBigIntegerField(blank=True)
  dump_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)