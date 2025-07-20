"""
Report note SQL table model
"""
from uuid import uuid4
from django.db import models
class ReportNote(models.Model):
    """
    Report note SQL table model
    """
    class Meta:
        """
        Report note SQL table model meta class
        """
        verbose_name = 'Report Note'
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
        on_delete = models.DO_NOTHING,
        related_name = 'report_notes'
    )
    report_id = models.ForeignKey(
        to = 'Report',
        on_delete = models.CASCADE,
        related_name = 'report_notes'
    )
    content = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
