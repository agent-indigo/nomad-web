from django.db import models
class Import(models.Model):
  account_id = models.OneToOneField(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='account_import'
  )
  type = models.TextField
  approved = models.BooleanField(default=True)
  overwrite = models.BooleanField(default=True)
  data_file_name = models.TextField(blank=True)
  data_content_type = models.TextField(blank=True)
  data_file_size = models.PositiveBigIntegerField(blank=True)
  data_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)