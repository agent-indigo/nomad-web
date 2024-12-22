from django.db import models
class Conversation(models.Model):
  class Meta:
    db_table = 'conversations'
    verbose_name = 'Conversation'
    verbose_name_plural = f'{verbose_name}s'
  uri = models.TextField(
    unique=True,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)