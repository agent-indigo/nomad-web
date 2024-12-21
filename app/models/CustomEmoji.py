from django.db import models
class CustomEmoji(models.Model):
  shortcode = models.TextField(unique=True)
  domain = models.TextField(
    unique=True,
    blank=True
  )
  disabled = models.BooleanField(default=False)
  visible_in_picker = models.BooleanField(
    blank=True,
    default=True
  )
  image_file_name = models.TextField(blank=True)
  image_content_type = models.TextField(blank=True)
  image_file_size = models.PositiveBigIntegerField(blank=True)
  uri = models.TextField(blank=True)
  image_remote_url = models.URLField(blank=True)
  category_id = models.TextField(blank=True)
  image_uploaded_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)