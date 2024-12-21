from django.db import models
class Block(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  target_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  uri = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)