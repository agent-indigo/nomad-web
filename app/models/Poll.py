from django.db import models
class Poll(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  options = [models.TextField]
  cached_tallies = [models.IntegerField]
  multiple = models.BooleanField(default=False)
  hide_totals = models.BooleanField(default=False)
  votes_count = models.IntegerField(default=0)
  lock_version = models.IntegerField
  expires_at = models.DateTimeField(blank=True)
  last_fetched_at = models.DateTimeField(blank=True)
  voters_count = models.IntegerField(
    blank=True,
    default=0
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)