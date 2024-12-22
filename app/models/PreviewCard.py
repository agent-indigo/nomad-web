from django.db import models
class PreviewCard(models.Model):
  class Meta:
    db_table = 'preview_cards'
    verbose_name = 'Preview card'
    verbose_name_plural = f'{verbose_name}s'
  url = models.URLField(unique=True)
  title = models.TextField
  description = models.TextField
  type = models.PositiveBigIntegerField
  html = models.TextField
  author_name = models.TextField
  author_url = models.URLField
  provider_name = models.TextField
  provider_url = models.URLField
  width = models.PositiveBigIntegerField
  height = models.PositiveBigIntegerField(blank=True)
  embed_url = models.URLField
  image_file_name = models.TextField(blank=True)
  image_content_type = models.TextField(blank=True)
  image_file_size = models.PositiveBigIntegerField(blank=True)
  image_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)