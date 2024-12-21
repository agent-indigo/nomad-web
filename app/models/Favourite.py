from django.db import models
class Favourite(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)