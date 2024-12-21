from django.db import models
class SessionActivation(models.Model):
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING
  )
  access_token_id = models.ForeignKey(
    'OAuthAccessToken',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  session_id = models.TextField(unique=True)
  user_agent = models.TextField
  ip = models.IPAddressField(blank=True)
  web_push_subscription_id = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)