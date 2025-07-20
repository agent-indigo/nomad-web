"""
Actor conversation SQL table model
"""
from uuid import uuid4
from django.db import models
from django.contrib.postgres.fields import ArrayField
class ActorConversation(models.Model):
    """
    Actor conversation SQL table model
    """
    class Meta:
        """
        Actor conversation SQL table model meta class
        """
        verbose_name = "Actor Conversation"
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
        related_name = 'conversations',
        null = True,
        blank = True
    )
    conversation_id = models.ForeignKey(
        to = 'Conversation',
        on_delete = models.CASCADE,
        related_name = 'actors',
        null = True,
        blank = True
    )
    participant_ids = ArrayField(
        models.TextField(),
        unique = True,
        default = list
    )
    post_ids = ArrayField(
        models.TextField(),
        default = list
    )
    lock_version = models.PositiveBigIntegerField()
    unread = models.BooleanField(
        default = True
    )
    last_post_id = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )
