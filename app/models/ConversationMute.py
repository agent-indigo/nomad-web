from django.db import models
class ConversationMute(models.Model):
  conversation_id = models.ForeignKey(
    'Conversation',
    on_delete=models.DO_NOTHING,
    related_name='conversation_mutes'
  )
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='conversation_mutes'
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)