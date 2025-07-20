"""
Announcement SQL table model
"""
from uuid import uuid4
from django.db import models
class Announcement(models.Model):
    """
    Announcement SQL table model
    """
    class Meta:
        """
        Announcement SQL table model meta class
        """
        verbose_name = "Announcement"
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    text = models.TextField()
    is_published = models.BooleanField(
        default = True
    )
    is_all_day = models.BooleanField(
        default = False
    )
    scheduled_at = models.DateTimeField(
        null = True,
        blank = True
    )
    starts_at = models.DateTimeField(
        null = True,
        blank = True
    )
    ends_at = models.DateTimeField(
        null = True,
        blank = True
    )
    published_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
