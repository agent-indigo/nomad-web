"""
Actor domain block SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorDomainBlock(models.Model):
    """
    Actor domain block SQL table model
    """
    class Meta:
        """
        Actor domain block SQL model meta class
        """
        verbose_name = 'Actor Domain Block'
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
        related_name = 'domain_blocks',
        null = True,
        blank = True
    )
    domain = models.TextField(
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
