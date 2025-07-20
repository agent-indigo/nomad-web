"""
List SQL table model
"""
from uuid import uuid4
from django.db import models
class List(models.Model):
    """
    List SQL table model
    """
    class Meta:
        """
        List SQL table model meta class
        """
        verbose_name = 'List'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    actor_id = models.ForeignKey(
        to = 'List',
        on_delete = models.CASCADE,
        related_name = 'lists'
    )
    title = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
