from django.db import models
class CustomEmojiCatrgory(models.Model):
  name = models.TextField(
    unique=True,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)