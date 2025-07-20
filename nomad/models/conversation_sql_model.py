"""
Conversation SQL table model
"""
from uuid import uuid4
from django.db import models
class Conversation(models.Model):
    """
    Conversation SQL table model
    """
    class Meta:
        """
        Conversation SQL table model meta class
        """
        verbose_name = "Conversation"
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    uri = models.TextField(
        unique = True,
        blank = False,
        null = False
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
