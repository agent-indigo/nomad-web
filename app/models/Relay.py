from django.db import models
class Relay(models.Model):
  class Meta:
    db_table = 'relays'
    verbose_name = 'Relay'
    verbose_name_plural = f'{verbose_name}s'
  inbox_url = models.URLField
  state = models.PositiveBigIntegerField
  follow_activity_id = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)