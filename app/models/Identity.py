from django.db import models
class Identity(models.Model):
  class Meta:
    db_table = 'identities'
    verbose_name = 'Identity'
    verbose_name_plural = 'Identities'
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='identities',
    blank=True
  )
  provider = models.TextField
  uid = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)