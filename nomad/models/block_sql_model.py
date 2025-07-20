"""
Block SQL table model
"""
from uuid import uuid4
from django.db import models
class Block(models.Model):
    """
    Block SQL table model
    """
    class Meta:
        """
        Block SQL table model meta class
        """
        verbose_name = "Block"
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
        related_name = 'blocks',
        null = True,
        blank = True
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'blockers',
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
