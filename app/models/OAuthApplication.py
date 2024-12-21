from django.db import models
class OAuthApplication(models.Model):
  owner_id = models.ForeignKey(
    'User',
    on_delete=models.DO_NOTHING,
    related_name='oauth_applications',
    blank=True
  )
  uid = models.TextField(unique=True)
  owner_type = models.TextField(
    db_index=True,
    blank=True
  )
  name = models.TextField
  secret = models.TextField
  redirect_uri = models.TextField
  scopes = models.TextField
  superapp = models.BooleanField
  confidential = models.BooleanField
  website = models.URLField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)