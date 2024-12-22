from django.db import models
class CustomFilter(models.Model):
  class Meta:
    db_table = 'custome_filters'
    verbose_name = 'Custom filter'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='custom_filters',
    blank=True
  )
  phrase = models.TextField
  context = [models.TextField]
  irreversible = models.BooleanField(default=False)
  whole_word = models.BooleanField(default=True)
  expires_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)