from django.db import models
class Tombstone(models.Model):
  class Meta:
    db_table = 'tombstones'
    verbose_name = 'Tombstone'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='tombstones',
    blank=True
  )
  uri = models.TextField(db_index=True)
  by_moderator = models.BooleanField(
    blank=True,
    default=False
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)