"""
Custom filter SQL table model
"""
from uuid import uuid4
from django.db import models
from django.contrib.postgres.fields import ArrayField
class CustomFilter(models.Model):
    """
    Custom filter SQL table model
    """
    class Meta:
        """
        Custom filter SQL table model meta class
        """
        verbose_name = 'Custom Filter'
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
        related_name = 'custom_filters',
        null = True,
        blank = True
    )
    phrase = models.TextField()
    context = ArrayField(
        models.TextField(),
        default = list
    )
    is_irreversible = models.BooleanField(
        default = False
    )
    do_filter_entire_word = models.BooleanField(
        default = True
    )
    expires_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
