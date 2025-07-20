"""
Actor moderation note SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorModerationNote(models.Model):
    """
    Actor moderation note SQL table model
    """
    class Meta:
        """
        Actor moderation note SQL table model meta class
        """
        verbose_name = "Actor Moderation Note"
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
        on_delete = models.CASCADE,
        related_name = 'issued_moderation_notes',
        null = True,
        blank = True
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'received_moderation_notes',
        null = True,
        blank = True
    )
    content = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
