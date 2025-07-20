"""
Actor stats SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorStats(models.Model):
    """
    Actor stats SQL table model
    """
    class Meta:
        """
        Actor stats SQL table model meta class
        """
        verbose_name = "Actor Stats"
        verbose_name_plural = verbose_name
        db_table = verbose_name_plural.lower().replace(
            " ",
            "_"
        )
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'stats',
        null = True,
        blank = True
    )
    posts_count = models.PositiveBigIntegerField(
        default = 0
    )
    following_count = models.PositiveBigIntegerField(
        default = 0
    )
    followers_count = models.PositiveBigIntegerField(
        default = 0
    )
    lock_version = models.PositiveBigIntegerField(
        default = 0
    )
    last_posted = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
