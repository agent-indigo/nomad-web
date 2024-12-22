from django.db import models
class CustomEmojiCatrgory(models.Model):
  class Meta:
    db_table = 'custom_emoji_categories'
    verbose_name = 'Custom emoji category'
    verbose_name_plural = 'Custom emoji categories'
  name = models.TextField(
    unique=True,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)