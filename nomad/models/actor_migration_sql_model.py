"""
Actor migration SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorMigration(models.Model):
    """
    Actor migration SQL table model
    """
    class Meta:
        """
        Actor migration SQL table model meta class
        """
        verbose_name = "Actor Migration"
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
        related_name = 'migrated_from',
        null = True,
        blank = True
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'migrated_to',
        null = True,
        blank = True
    )
    actor_name = models.TextField()
    followers_count = models.PositiveBigIntegerField(
        default = 0
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
