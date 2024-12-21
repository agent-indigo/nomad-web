from django.db import models
class AccountIdentityProof(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  provider = models.TextField(unique=True)
  provider_username = models.TextField(unique=True)
  token = models.TextField
  verified = models.BooleanField(default=False)
  live = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)