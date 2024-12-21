from django.db import models
class Setting(models.Model):
  var = models.TextField(unique=True)
  thing_type = models.TextField(
    unique=True,
    blank=True
  )
  thing_id = models.TextField(
    unique=True,
    blank=True
  )
  value = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)