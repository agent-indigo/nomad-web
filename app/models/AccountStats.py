from django.db import models
class AccountStats(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  statuses_count = models.PositiveBigIntegerField(default=0)
  following_count = models.PositiveBigIntegerField(default=0)
  followers_count = models.PositiveBigIntegerField(default=0)
  lock_version = models.PositiveBigIntegerField
  last_status_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)