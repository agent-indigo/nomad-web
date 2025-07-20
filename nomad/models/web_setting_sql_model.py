"""
Web setting SQL table model
"""
from uuid import uuid4
from django.db import models
class WebSetting(models.Model):
    """
    Web setting SQL table model
    """
    class Meta:
        """
        Web setting SQL table model meta class
        """
        verbose_name = 'Web Setting'
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
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'web_settings'
    )
    data = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
