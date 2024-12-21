from django.db import models
class Account(models.Model):
  moved_to_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  uri = models.TextField(db_index=True)
  url = models.URLField(
    db_index=True,
    blank=True
  )
  username = models.TextField
  secret = models.TextField
  public_key = models.TextField
  remote_url = models.URLField
  salmon_url = models.URLField
  hub_url = models.URLField
  note = models.TextField
  display_name = models.TextField
  locked = models.BooleanField(default=False)
  header_remote_url = models.URLField
  inbox_url = models.URLField
  domain = models.TextField(blank=True)
  private_key = models.TextField(blank=True)
  avatar_file_name = models.TextField(blank=True)
  avatar_content_type = models.TextField(blank=True)
  avatar_file_size = models.DecimalField(blank=True)
  avatar_updated_at = models.DateTimeField(blank=True)
  header_file_name = models.TextField(blank=True)
  header_content_type = models.TextField(blank=True)
  header_file_size = models.DecimalField(blank=True)
  header_updated_at = models.DateTimeField(blank=True)
  avatar_remote_url = models.URLField(blank=True)
  subscription_expires_at = models.DateTimeField(blank=True)
  last_webfingered_at = models.DateTimeField(blank=True)
  outbox_url = models.URLField
  shared_inbox_url = models.URLField
  followers_url = models.URLField
  protocol = models.IntegerField
  memorial = models.BooleanField(default=False)
  featured_collection_url = models.URLField(blank=True)
  fields = models.JSONField(blank=True)
  actor_type = models.TextField(blank=True)
  discoverable = models.BooleanField(
    default=True,
    blank=True
  )
  also_known_as = [models.TextField]
  silenced_at = models.DateTimeField(blank=True)
  suspended_at = models.DateTimeField(blank=True)
  trust_level = models.IntegerField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)