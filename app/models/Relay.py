from django.db import models
class Relay(models.Model):
  inbox_url = models.URLField
  state = models.IntegerField
  follow_activity_id = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)