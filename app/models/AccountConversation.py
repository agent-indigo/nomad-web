from django.db import models
class AccountConversation(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='account_conversations',
    blank=True
  )
  conversation_id = models.ForeignKey(
    'Conversation',
    on_delete=models.DO_NOTHING,
    related_name='account_conversations',
    blank=True
  )
  participant_account_ids = [models.TextField(unique=True)]
  status_ids = [models.TextField]
  lock_version = models.PositiveBigIntegerField
  unread = models.BooleanField(default=True)
  last_status_id = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)