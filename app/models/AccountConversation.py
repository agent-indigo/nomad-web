from django.db import models
class AccountConversation(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  conversation_id = models.ForeignKey(
    'Conversation',
    on_delete=models.DO_NOTHING
  )
  participant_account_ids = [models.TextField(unique=True)]
  status_ids = [models.TextField]
  lock_version = models.IntegerField
  unread = models.BooleanField(default=True)
  last_status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)