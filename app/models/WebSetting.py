from django.db import models
class WebSetting(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING
  )
  data = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)