from django.db import models
class SessionActivation(models.Model):
  class Meta:
    db_table = 'session_activations'
    verbose_name = 'Session activation'
    verbose_name_plural = f'{verbose_name}s'
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='session_activations'
  )
  access_token_id = models.ForeignKey(
    'OAuthAccessToken',
    on_delete=models.DO_NOTHING,
    related_name='session_activations',
    blank=True
  )
  session_id = models.TextField(unique=True)
  user_agent = models.TextField
  ip = models.GenericIPAddressField(null=True)
  web_push_subscription_id = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)