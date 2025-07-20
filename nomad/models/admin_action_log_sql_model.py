"""
Admin action log SQL table model
"""
from uuid import uuid4
from django.db import models
class AdminActionLog(models.Model):
    """
    SQL table model for admin action logs
    """
    class Meta:
        """
        Admin action log SQL table meta class
        """
        verbose_name = "Admin Action Log"
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
        related_name = 'issued_admin_actions',
        null = True,
        blank = True
    )
    target_actor_type = models.TextField(
        db_index = True,
        null = True,
        blank = True
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'received_admin_actions',
        null = True,
        blank = True
    )
    action = models.TextField()
    recorded_changes = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
