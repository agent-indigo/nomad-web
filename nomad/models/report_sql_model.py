"""
Report SQL table model
"""
from uuid import uuid4
from django.db import models
from django.contrib.postgres.fields import ArrayField
class Report(models.Model):
    """
    Report SQL table model
    """
    class Meta:
        """
        Report SQl table model meta class
        """
        verbose_name = 'Report'
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
        related_name = 'filed_reports'
    )
    target_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.CASCADE,
        related_name = 'in_reports'
    )
    action_taken_by_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.DO_NOTHING,
        related_name = 'reports_acted_on',
        null = True,
        blank = True
    )
    assigned_to_actor_id = models.ForeignKey(
        to = 'Actor',
        on_delete = models.DO_NOTHING,
        related_name = 'assigned_reports',
        null = True,
        blank = True
    )
    post_ids = ArrayField(
        models.TextField(),
        default = list
    )
    comment = models.TextField()
    is_resolved = models.BooleanField(
        default = False
    )
    uri = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
