"""
Media attachment SQL table model
"""
from uuid import uuid4
from django.db import models
class MediaAttachment():
    """
    Media attachment SQL table model
    """
    class Meta:
        """
        Media attachment SQL table model meta class
        """
        verbose_name = 'Media Attachment'
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
        related_name = 'media_attachments',
        null = True,
        blank = True
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'media_attachments',
        null = True,
        blank = True
    )
    short_code = models.TextField(
        unique = True,
        null = True,
        blank = True
    )
    description = models.TextField(
        null = True,
        blank = True
    )
    remote_url = models.URLField()
    blur_hash = models.TextField(
        null = True,
        blank = True
    )
    file_name = models.TextField(
        null = True,
        blank = True
    )
    file_meta_data = models.TextField()
    file_content_type = models.TextField(
        null = True,
        blank = True
    )
    file_size = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
