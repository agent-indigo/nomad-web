"""
Actor warning preset SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorWarningPreset(models.Model):
    """
    Actor warning preset SQL table model
    """
    class Meta:
        """
        Actor warning preset SQL table model metaclass
        """
        verbose_name = "Actor Warning Preset"
        verbose_name_plural = fr'{verbose_name}s'
        db_table = verbose_name_plural.lower().replace(
            ' ',
            '_'
        )
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    text = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )
