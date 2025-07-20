"""
Post pin SQL table model
"""
from uuid import uuid4
from django.db import models
class PostPin(models.Model):
    """
    Post pin SQL table model
    """
    class Meta:
        """
        Post pin SQL table model meta class
        """
        verbose_name = 'Post Pin'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower().replace(
            ' ',
            '_'
        )
    id =  models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'pinned_posts'
    )
    post_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'pins'
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
