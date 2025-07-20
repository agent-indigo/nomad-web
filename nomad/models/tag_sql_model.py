"""
Tag SQL table model
"""
from uuid import uuid4
from django.db import models
class Tag(models.Model):
    """
    Tag SQL table model
    """
    class Meta:
        """
        Tag SQL table model meta class
        """
        verbose_name = 'Tag'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    name = models.TextField(
        null = True,
        blank = True
    )
    is_usable = models.BooleanField(
        default = True,
        null = True,
        blank = True
    )
    is_trendable = models.BooleanField(
        default = True,
        null = True,
        blank = True
    )
    is_listable = models.BooleanField(
        default = True,
        null = True,
        blank = True
    )
    max_score = models.PositiveIntegerField(
        default = 0,
        null = True,
        blank = True
    )
    max_score_at = models.DateTimeField(
        null = True,
        blank = True
    )
    last_post_at = models.DateTimeField(
        null = True,
        blank = True
    )
    reviewed_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
