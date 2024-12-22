from django.db import models
class Bookmark(models.Model):
  class Meta:
    db_table = 'bookmarks'
    verbose_name = 'Bookmark'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='bookmarks',
  )
  status_id = models.ForeignKey(
    'Status',
    on_delete=models.DO_NOTHING,
    related_name='bookmarks',
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)