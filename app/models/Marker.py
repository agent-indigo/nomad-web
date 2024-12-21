from django.db import models
class Marker(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='markers',
    blank=True
  )
  timeline = models.TextField(unique=True)
  last_read_id = models.TextField
  lock_version = models.PositiveBigIntegerField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)