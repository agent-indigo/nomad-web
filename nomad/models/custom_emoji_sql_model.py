"""
Custom emoji SQL table model
"""
from uuid import uuid4
from django.db import models
class CustomEmoji(models.Model):
    """
    Custom emoji SQL table model
    """
    class Meta:
        """
        Custom emoji SQL table model meta class
        """
        verbose_name = "Custom Emoji"
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower().replace(
            ' ',
            '_'
        )
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.DO_NOTHING,
        related_name = 'custom_emojis',
        null = True,
        blank = True
    )
    category_id = models.ForeignKey(
        to = 'CustomEmojiCategory',
        on_delete = models.DO_NOTHING,
        null = True,
        blank = True,
        related_name = 'emojis'
    )
    short_code = models.TextField(
        unique = True
    )
    domain = models.TextField(
        unique = True,
        null = True,
        blank = True
    )
    is_disabled = models.BooleanField(
        default = False
    )
    is_visible_in_selector = models.BooleanField(
        default = True
    )
    image_file_name  = models.TextField(
        null = True,
        blank = True
    )
    image_content_type = models.TextField(
        null = True,
        blank = True
    )
    image_file_size = models.PositiveIntegerField(
        null = True,
        blank = True
    )
    image_remote_url = models.URLField(
        null = True,
        blank = True
    )
    image_uploaded_at = models.DateTimeField(
        null = True,
        blank = True
    )
    uri = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
