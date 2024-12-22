from django.db import models
class Announcement(models.Model):
  class Meta:
    db_table = 'announcements'
    verbose_name = 'Announcement'
    verbose_name_plural = f'{verbose_name}s'
  text = models.TextField
  published = models.BooleanField(default=True)
  all_day = models.BooleanField(default=False)
  scheduled_at = models.DateTimeField(blank=True)
  starts_at = models.DateTimeField(blank=True)
  ends_at = models.DateTimeField(blank=True)
  published_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)