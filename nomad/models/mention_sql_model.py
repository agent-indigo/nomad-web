"""
Mention SQL table model
"""
from uuid import uuid4
from django.db import models
class Mention(models.Model):
    """
    Mention SQL table model
    """
    class Meta:
        """
        Mention SQL table model meta class
        """
        verbose_name = 'Mention'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'mentions'
    )
    post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'mentions'
    )
    is_silent = models.BooleanField(
        default = False
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
