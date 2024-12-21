from django.db import models
class StatusStats(models.Model):
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='stats'
  )
  replies_count = models.PositiveBigIntegerField(default=0)
  reblogs_count = models.PositiveBigIntegerField(default=0)
  favourites_count = models.PositiveBigIntegerField(default=0)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)