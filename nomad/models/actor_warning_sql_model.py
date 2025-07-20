"""
Actor warning SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorWarning(models.Model):
    """
    Actor warning SQL table model
    """
    class Meta:
        """
        Actor warning SQL table model meta class
        """
        verbose_name = "Actor Warning"
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
        related_name = 'issued_warnings',
        null = True,
        blank = True
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'received_warnings',
        null = True,
        blank = True
    )
    action = models.PositiveBigIntegerField()
    text = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
