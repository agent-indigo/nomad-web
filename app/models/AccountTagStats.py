from django.db import models
class AccountTagStats(models.Model):
  tag_id = models.ForeignKey(
    'Tag',
    on_delete=models.DO_NOTHING
  )
  accounts_count = models.IntegerField(default=0)
  hidden = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)