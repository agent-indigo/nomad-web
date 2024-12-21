from django.db import models
class FeaturedTag(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  tag_id = models.ForeignKey(
    'Tag',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  statuses_count = models.IntegerField(default=0)
  last_status_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)