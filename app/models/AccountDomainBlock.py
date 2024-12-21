from django.db import models
class AccountDomainBlock(models.Model):
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