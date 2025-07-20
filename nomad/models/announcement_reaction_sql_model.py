"""
Announcement reaction SQL table model
"""
from uuid import uuid4
from django.db import models
class AnnouncementReaction(models.Model):
    """
    Announcement reaction SQL table model
    """
    class Meta:
        """
        Ammouncement reaction SQL table model meta class
        """
        verbose_name = "Announcement Reaction"
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
        related_name = 'announcement_reactions',
        null = True,
        blank = True
    )
    announcement_id = models.ForeignKey(
        to = 'Announcement',
        on_delete = models.CASCADE,
        related_name = 'reactions',
        null = True,
        blank = True
    )
    custom_emoji_id = models.ForeignKey(
        to = 'CustomEmoji',
        on_delete = models.CASCADE,
        related_name = 'announcement_reactions',
        null = True,
        blank = True
    )
    type = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
