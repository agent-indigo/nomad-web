from django.db import models
class AccountIdentityProof(models.Model):
  class Meta:
    db_table = 'account_identity_proofs'
    verbose_name = 'Account identity proof'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='account_identity_proofs',
    blank=True
  )
  provider = models.TextField(unique=True)
  provider_username = models.TextField(unique=True)
  token = models.TextField
  verified = models.BooleanField(default=False)
  live = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)