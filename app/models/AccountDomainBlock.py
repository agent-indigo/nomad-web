from django.db import models
class AccountDomainBlock(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  domain = models.TextField(
    unique=True,
    blank=True
  )