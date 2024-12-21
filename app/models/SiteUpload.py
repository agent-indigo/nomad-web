from django.db import models
class SiteUpload(models.Model):
  var = models.TextField(unique=True)
  file_file_name = models.TextField(blank=True)
  file_content_type = models.TextField(blank=True)
  meta = models.TextField(blank=True)
  file_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)