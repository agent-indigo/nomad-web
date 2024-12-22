from django.db import models
class FeaturedTag(models.Model):
  class Meta:
    db_table = 'featured_tags'
    verbose_name = 'Featured tag'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='featured_tags',
    blank=True
  )
  tag_id = models.ForeignKey(
    'Tag',
    on_delete=models.DO_NOTHING,
    related_name='featured_tags',
    blank=True
  )
  statuses_count = models.PositiveBigIntegerField(default=0)
  last_status_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)