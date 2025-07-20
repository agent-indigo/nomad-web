"""
Post SQL table model
"""
from uuid import uuid4
from django.db import models
class Post(models.Model):
    """
    Post SQL table model
    """
    class Meta:
        """
        Post SQL table model meta class
        """
        verbose_name = 'Post'
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
        related_name = 'posts'
    )
    in_reply_to_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'replies',
        null = True,
        blank = True
    )
    in_reply_to_post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'replies',
        null = True,
        blank = True
    )
    reblog_of_post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'reblogs',
        null = True,
        blank = True
    )
    conversation_id = models.ForeignKey(
        to = 'Conversation',
        on_delete = models.DO_NOTHING,
        related_name = 'conversations',
        null = True,
        blank = True
    )
    poll_id = models.ForeignKey(
        to = 'Poll',
        on_delete = models.CASCADE,
        related_name = 'polls',
        null = True,
        blank = True
    )
    text = models.TextField()
    language = models.TextField(
        null = True,
        blank = True
    )
    uri = models.TextField(
        unique = True,
        null = True,
        blank = True
    )
    url = models.URLField()
    visibility = models.PositiveBigIntegerField(
        db_index = True
    )
    is_sensitive = models.BooleanField(
        default = False
    )
    is_spoiler = models.BooleanField(
        default = False
    )
    is_reply = models.BooleanField(
        default = False
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
