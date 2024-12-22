from django.db import models
class List(models.Model):
  class Meta:
    db_table = 'lists'
    verbose_name = 'List'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='lists'
  )
  title = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)