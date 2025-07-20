"""
Relay SQL table model
"""
from uuid import uuid4
from django.db import models
class Relay(models.Model):
    """
    Relay SQL table model
    """
    class Meta:
        """
        Relay SQL table model meta class
        """
        verbose_name = 'Relay'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    inbox_url = models.URLField()
    state = models.PositiveBigIntegerField()
    follow_activity_id = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
