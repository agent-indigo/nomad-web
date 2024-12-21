from django.db import models
class PollVote(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  poll_id = models.ForeignKey(
    'Poll',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  choice = models.PositiveBigIntegerField
  uri = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)