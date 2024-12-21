from django.db import models
class AccountTagStats(models.Model):
  tag_id = models.OneToOneField(
    'Tag',
    on_delete=models.DO_NOTHING,
    related_name='tag_stats'
  )
  accounts_count = models.PositiveBigIntegerField(default=0)
  hidden = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)