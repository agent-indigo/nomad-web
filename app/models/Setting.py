from django.db import models
class Setting(models.Model):
  class Meta:
    db_table = 'settings'
    verbose_name = 'Setting'
    verbose_name_plural = f'{verbose_name}s'
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