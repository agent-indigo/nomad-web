"""
Actor tag stats SQL table model
"""
from uuid import uuid4
from django.db import models
class ActorTagStats(models.Model):
    """
    Actor tag stats SQL table model
    """
    class Meta:
        """
        Actor tag stats SQL table model meta class
        """
        verbose_name = "Actor Tag Stats"
        verbose_name_plural = f'${verbose_name}s'
        db_table = verbose_name_plural.lower().replace(
            ' ',
            '_'
        )
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    tag_id = models.ForeignKey(
        to = 'Tag',
        on_delete = models.CASCADE,
        related_name = 'stats'
    )
    accounts_count = models.PositiveIntegerField(
        default = 0
    )
    is_hidden = models.BooleanField(
        default = False
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
