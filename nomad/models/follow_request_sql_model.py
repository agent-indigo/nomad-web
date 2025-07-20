"""
Follow request SQL table model
"""
from uuid import uuid4
from django.db import models
class FollowRequest(models.Model):
    """
    Follow request SQL table model
    """
    class Meta:
        """
        Follow request SQL table model meta class
        """
        verbose_name = 'Follow Request'
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
        related_name = 'follow_requests'
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'follow_requesters'
    )
    do_show_reblogs = models.BooleanField(
        default = True
    )
    url = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
