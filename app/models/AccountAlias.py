from django.db import models
class AccountAlias(models.Model):
  class Meta:
    db_table = 'account_aliases'
    verbose_name = 'Account alias'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='aliases',
    blank=True
  )
  acct = models.TextField(blank=True)
  uri = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)