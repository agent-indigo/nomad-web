"""
Notification SQL table model
"""
from uuid import uuid4
from django.db import models
class Notification(models.Model):
    """
    Notification SQL table model
    """
    class Meta:
        """
        Notification SQL table model meta class
        """
        verbose_name = 'Notification'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'notifications_received'
    )
    from_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'notifications_sent'
    )
    activity_id = models.TextField()
    activity_type = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
