"""
Preview card SQL table model
"""
from uuid import uuid4
from django.db import models
class PreviewCard(models.Model):
    """
    Preview card SQL table model
    """
    class Meta:
        """
        Preview card SQL table model meta class
        """
        verbose_name = 'Preview Card'
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
    url = models.URLField(
        unique = True
    )
    title = models.TextField()
    description = models.TextField()
    type = models.PositiveSmallIntegerField()
    html = models.TextField()
    author_name = models.TextField()
    author_url = models.URLField()
    provider_name = models.TextField()
    provider_url = models.URLField()
    width = models.PositiveBigIntegerField()
    height = models.PositiveSmallIntegerField(
        null = True,
        blank = True
    )
    embed_url = models.URLField()
    image_file_name = models.TextField(
        null = True,
        blank = True
    )
    image_content_type = models.TextField(
        null = True,
        blank = True
    )
    image_file_size = models.PositiveSmallIntegerField(
        null = True,
        blank = True
    )
    image_updated_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
