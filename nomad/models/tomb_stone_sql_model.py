"""
Tomb stone SQL table model
"""
from uuid import uuid4
from django.db import models
class TombStone(models.Model):
    """
    Tomb stone SQL table model
    """
    class Meta:
        """
        Tomb stone SQL table model meta class
        """
        verbose_name = 'Tomb Stone'
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
        related_name = 'tomb_stones',
        null = True,
        blank = True
    )
    uri = models.TextField(
        db_index = True
    )
    is_from_moderator = models.BooleanField(
        default = False,
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
