"""
Setting SQL table model
"""
from uuid import uuid4
from django.db import models
class Setting(models.Model):
    """
    Setting SQL table model
    """
    class Meta:
        """
        Setting SQL table model meta class
        """
        verbose_name = 'Setting'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    var = models.TextField(
        unique = True
    )
    thing_type = models.TextField(
        unique = True,
        null = True,
        blank = True
    )
    thing_id = models.TextField(
        unique = True,
        null = True,
        blank = True
    )
    value = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
