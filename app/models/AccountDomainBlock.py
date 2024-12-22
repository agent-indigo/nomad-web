from django.db import models
class AccountDomainBlock(models.Model):
  class Meta:
    db_table = 'account_domain_blocks'
    verbose_name = 'Account domain'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='account_domain_blocks',
    blank=True
  )
  domain = models.TextField(
    unique=True,
    blank=True
  )