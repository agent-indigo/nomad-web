"""
Poll SQL table model
"""
from uuid import uuid4
from django.db import models
from django.contrib.postgres.fields import ArrayField
class Poll(models.Model):
    """
    Poll SQL table model
    """
    class Meta:
        """
        Poll SQL table model meta class
        """
        verbose_name = 'Poll'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'polls',
        null = True,
        blank = True
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'polls',
        null = True,
        blank = True
    )
    options = ArrayField(
        models.TextField(),
        default = list
    )
    cached_tallies = ArrayField(
        models.PositiveBigIntegerField(),
        default = list
    )
    votes_count = models.PositiveBigIntegerField(
        default = 0
    )
    voters_count = models.PositiveSmallIntegerField(
        default = 0,
        null = True,
        blank = True
    )
    is_multiple_allowed = models.BooleanField(
        default = False
    )
    do_hide_totals = models.BooleanField(
        default = False
    )
    lock_version = models.PositiveBigIntegerField(
        default = 0
    )
    last_fetched_at = models.DateTimeField(
        null = True,
        blank = True
    )
    expires_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
