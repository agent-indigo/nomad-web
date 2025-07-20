"""
List actor SQL table model
"""
from uuid import uuid4
from django.db import models
class ListActor(models.Model):
    """
    List actor SQL table model
    """
    class Meta:
        """
        List actor SQL table model meta class
        """
        verbose_name = 'List Actor'
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
    list_id = models.ForeignKey(
        to = 'List',
        on_delete = models.CASCADE,
        related_name = 'actors'
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'lists'
    )
    follow_id = models.ForeignKey(
        to = 'Follow',
        on_delete = models.CASCADE,
        related_name = 'lists'
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
