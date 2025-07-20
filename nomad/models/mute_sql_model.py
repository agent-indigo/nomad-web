"""
Mute SQL table model
"""
from uuid import uuid4
from django.db import models
class Mute(models.Model):
    """
    Mute SQL table model
    """
    class Meta:
        """
        Mute SQL table model meta class
        """
        verbose_name = 'Mute'
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
        related_name = 'mutes'
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'muters'
    )
    do_hide_notifications = models.BooleanField(
        default = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
