from django.db import models
class AccountWarning(models.Model):
  class Meta:
    db_table = 'account_warnings'
    verbose_name = 'Account warning'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='filed_warnings',
    blank=True
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='issued_warnings',
    blank=True
  )
  action = models.PositiveBigIntegerField
  text = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)