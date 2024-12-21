from django.db import models
class WebPushSubscription(models.Model):
  access_token_id = models.ForeignKey(
    'OAuthAccessToken',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  user_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING
  )
  endpoint = models.TextField
  key_p256dh = models.TextField
  key_auth = models.TextField
  data = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)