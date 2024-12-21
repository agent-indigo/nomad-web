from django.db import models
class Conversation(models.Model):
  uri = models.TextField(
    unique=True,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)