from django.db import models
class FollowRequest(models.Model):
  class Meta:
    db_table = 'follow_requests'
    verbose_name = 'Follow request'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='follow_requests'
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='follow_requesters'
  )
  show_reblogs = models.BooleanField(default=True)
  uri = models.TextField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)