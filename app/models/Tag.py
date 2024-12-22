from django.db import models
class Tag(models.Model):
  class Meta:
    db_table = 'tags'
    verbose_name = 'Tag'
    verbose_name_plural = f'{verbose_name}s'
  name = models.TextField(blank=True)
  usable = models.BooleanField(
    blank=True,
    default=True
  )
  trendable = models.BooleanField(
    blank=True,
    default=True
  )
  listable = models.BooleanField(
    blank=True,
    default=True
  )
  reviewed_at = models.DateTimeField(blank=True)
  last_status_at = models.DateTimeField(blank=True)
  max_score = models.PositiveBigIntegerField(blank=True)
  max_score_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)