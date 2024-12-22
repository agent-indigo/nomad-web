from django.db import models
class WebSetting(models.Model):
  class Meta:
    db_table = 'web_settings'
    verbose_name = 'Web setting'
    verbose_name_plural = f'{verbose_name}s'
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='web_settings'
  )
  data = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)