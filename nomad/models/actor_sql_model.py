"""
Actor SQL table model
"""
from uuid import uuid4
from django.db import models
from django.contrib.postgres.fields import ArrayField
class Actor(models.Model):
    """
    Actor SQL table model
    """
    class Meta:
        """
        Actor SQL table model meta class
        """
        verbose_name = 'Actor'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    moved_to_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'moved_from_actor_id',
        null = True,
        blank = True
    )
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'actor'
    )
    username = models.TextField()
    display_name = models.TextField()
    also_known_as = ArrayField(
        models.TextField(),
        default = list
    )
    note = models.TextField()
    fields = models.JSONField(
        null = True,
        blank = True
    )
    actor_type = models.TextField(
        null = True,
        blank = True
    )
    uri = models.TextField(
        db_index = True
    )
    url = models.URLField(
        db_index = True,
        null = True,
        blank = True
    )
    secret = models.TextField()
    public_key = models.TextField(
        null = True,
        blank = True
    )
    private_key = models.TextField(
        null = True,
        blank = True
    )
    protocol = models.PositiveBigIntegerField()
    trust_level = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    is_discoverable = models.BooleanField(
        default = True,
        null = True,
        blank = True
    )
    is_memorial = models.BooleanField(
        default = False 
    )
    is_locked = models.BooleanField(
        default = False
    )
    inbox_url = models.URLField()
    shared_inbox_url = models.URLField()
    outbox_url = models.URLField()
    followers_url = models.URLField()
    featured_collections_url = models.URLField()
    remote_url = models.URLField()
    salmon_url = models.URLField()
    hub_url = models.URLField()
    domain = models.TextField(
        null = True,
        blank = True
    )
    avatar_file_name = models.TextField(
        null = True,
        blank = True
    )
    avatar_content_type = models.TextField(
        null = True,
        blank = True
    )
    avatar_file_size = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    avatar_updated_at = models.DateTimeField(
        null = True,
        blank = True
    )
    avatar_remote_url = models.URLField(
        null = True,
        blank = True
    )
    header_file_name = models.TextField(
        null = True,
        blank = True
    )
    header_content_type = models.TextField(
        null = True,
        blank = True
    )
    header_file_size = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    header_updated_at = models.DateTimeField(
        null = True,
        blank = True
    )
    header_remote_url = models.URLField(
        null = True,
        blank = True
    )
    subscription_expires_at = models.DateTimeField(
        null = True,
        blank = True
    )
    last_webfingered_at = models.DateTimeField(
        null = True,
        blank = True
    )
    silenced_at = models.DateTimeField(
        null = True,
        blank = True
    )
    suspended_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
