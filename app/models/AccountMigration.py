from django.db import models
class AccountMigration(models.Model):
  class Meta:
    db_table = 'account_migrations'
    verbose_name = 'Account migration'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='migrated_from',
    blank=True
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='migrated_to',
    blank=True
  )
  acct = models.TextField
  followers_count = models.PositiveBigIntegerField(default=0)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)