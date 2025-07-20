"""
Marker SQL table model
"""
from uuid import uuid4
from django.db import models
class Marker(models.Model):
    """
    Marker SQL table model
    """
    class Meta:
        """
        Marker SQL table model meta class
        """
        verbose_name = 'Marker'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'markers',
        null = True,
        blank = True
    )
    timeline = models.TextField(
        unique = True
    )
    last_read_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.DO_NOTHING,
        related_name = 'markers',
        null = True,
        blank = True
    )
    lock_version = models.PositiveBigIntegerField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
