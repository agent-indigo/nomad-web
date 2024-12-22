from django.db import models
class SiteUpload(models.Model):
  class Meta:
    db_table = 'site_uploads'
    verbose_name = 'Site upload'
    verbose_name_plural = f'{verbose_name}s'
  var = models.TextField(unique=True)
  file_file_name = models.TextField(blank=True)
  file_content_type = models.TextField(blank=True)
  meta = models.TextField(blank=True)
  file_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)