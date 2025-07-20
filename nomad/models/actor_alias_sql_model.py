"""
Actor alias SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorAlias(models.Model):
    """
    Actor alias SQL table model
    """
    class Meta:
        """
        Actor alias SQL table modle meta class
        """
        verbose_name = "Actor Alias"
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
        related_name = 'aliases',
        null = True,
        blank = True
    )
    alias = models.TextField(
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
