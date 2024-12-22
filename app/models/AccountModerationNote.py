from django.db import models
class AccountModerationNote(models.Model):
  class Meta:
    db_table = 'account_moderation_notes'
    verbose_name = 'Account moderation note'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='filed_moderation_notes'
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='issued_moderation_notes'
  )
  content = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)