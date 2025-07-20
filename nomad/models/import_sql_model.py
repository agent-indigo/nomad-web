"""
Import SQL table model
"""
from uuid import uuid4
from django.db import models
class Import(models.Model):
    """
    Import SQL table model
    """
    class Meta:
        """
        Import SQL table model meta class
        """
        verbose_name = 'Import'
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
        related_name = 'imports'
    )
    type = models.TextField()
    is_approved = models.BooleanField(
        default = True
    )
    overwrite = models.BooleanField(
        default = True
    )
    data_file_name = models.TextField(
        null = True,
        blank = True
    )
    data_content_type = models.TextField(
        null = True,
        blank = True
    )
    data_file_size = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    data_updated_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
