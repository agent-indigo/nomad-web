from django.db import models
class AccountWarningPreset(models.Model):
  class Meta:
    db_table = 'account_warning_presets'
    verbose_name = 'Account warning preset'
    verbose_name_plural = f'{verbose_name}s'
  text = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)