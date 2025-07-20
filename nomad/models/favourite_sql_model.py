"""
Favourite SQL table model
"""
from uuid import uuid4
from django.db import models
class Favourite(models.Model):
    """
    Favourite SQL table model
    """
    class Meta:
        """
        Favourite SQL table model meta class
        """
        verbose_name = 'Favourite'
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
        related_name = 'favourites'
    )
    post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'favourites'
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
