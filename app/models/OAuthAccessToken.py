from django.db import models
class OAuthAccessToken(models.Model):
  application_id = models.ForeignKey(
    'OAuthApplication',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  resource_owner_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  token = models.TextField(unique=True)
  refresh_token = models.TextField(
    unique=True,
    blank=True
  )
  expires_in = models.PositiveBigIntegerField(blank=True)
  revoked_at = models.DateTimeField(blank=True)
  scopes = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)