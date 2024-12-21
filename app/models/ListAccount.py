from django.db import models
class ListAccount(models.Model):
  list_id = models.ForeignKey(
    'List',
    on_delete=models.DO_NOTHING
  )
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  follow_id = models.ForeignKey(
    'Follow',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)