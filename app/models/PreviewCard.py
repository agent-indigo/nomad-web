from django.db import models
class PreviewCard(models.Model):
  url = models.URLField(unique=True)
  title = models.TextField
  description = models.TextField
  type = models.IntegerField
  html = models.TextField
  author_name = models.TextField
  author_url = models.URLField
  provider_name = models.TextField
  provider_url = models.URLField
  width = models.IntegerField
  height = models.IntegerField(blank=True)
  embed_url = models.URLField
  image_file_name = models.TextField(blank=True)
  image_content_type = models.TextField(blank=True)
  image_file_size = models.DecimalField(blank=True)
  image_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)