"""
Custon emoji category SQL table model
"""
from uuid import uuid4
from django.db import models
class CustomEmojiCategory(models.Model):
    """
    Custom emoji category SQL table model
    """
    class Meta:
        """
        Custom emoji category SQL table model meta class
        """
        verbose_name = "Custom Emoji Category"
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
        related_name = 'custom_emoji_categories',
        null = True,
        blank = True
    )
    name = models.TextField(
        unique = True,
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
