from django.db import models
class PollVote(models.Model):
  class Meta:
    db_table = 'poll_votes'
    verbose_name = 'Poll vote'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='poll_votes',
    blank=True
  )
  poll_id = models.ForeignKey(
    'Poll',
    on_delete=models.DO_NOTHING,
    related_name='poll_votes',
    blank=True
  )
  choice = models.PositiveBigIntegerField
  uri = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)