"""
Follow SQL table model
"""
from uuid import uuid4
from django.db import models
class Follow(models.Model):
    """
    Follow SQL table model
    """
    class Meta:
        """
        Follow SQL table model meta class
        """
        verbose_name = 'Follow'
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
        related_name = 'follows'
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'followers'
    )
    do_show_reblogs = models.BooleanField(
        default = True
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
