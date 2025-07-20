"""
Poll vote SQL table model
"""
from uuid import uuid4
from django.db import models
class PollVote(models.Model):
    """
    Poll vote SQL table model
    """
    class Meta:
        """
        Poll vote SQL table model meta class
        """
        verbose_name = 'Poll Vote'
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
    post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'poll_votes',
        null = True,
        blank = True
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'poll_votes',
        null = True,
        blank = True
    )
    choice = models.PositiveBigIntegerField()
    url = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
