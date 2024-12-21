from django.db import models
class OAuthAccessGrant(models.Model):
  application_id = models.ForeignKey(
    'OAuthApplication',
    on_delete=models.DO_NOTHING,
    related_name='oauth_access_grants'
  )
  resource_owner_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='oauth_access_grants'
  )
  token = models.TextField(unique=True)
  expires_in = models.PositiveBigIntegerField
  redirect_uri = models.TextField
  revoked_at = models.DateTimeField(blank=True)
  scopes = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)