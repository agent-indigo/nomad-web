"""
Announcement mute SQL table model
"""
from uuid import uuid4
from django.db import models
class AnnouncementMute(models.Model):
    """
    Announcement mute SQL table model
    """
    class Meta:
        """
        Announcement mute SQL table model meta class
        """
        verbose_name = "Announcement Mute"
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
        related_name = 'announcement_mutes',
        null = True,
        blank = True
    )
    announcement_id = models.ForeignKey(
        to = 'Announcement',
        on_delete = models.CASCADE,
        related_name = 'mutes',
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
