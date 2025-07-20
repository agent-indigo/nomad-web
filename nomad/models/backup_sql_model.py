"""
Backup SQL table model
"""
from uuid import UUID
from django.db import models
class Backup(models.Model):
    """
    Backup SQL table model
    """
    class Meta:
        """
        Backup SQL table model meta class
        """
        verbose_name = "Backup"
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = UUID,
        editable = False
    )
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'backups',
        null = True,
        blank = True
    )
    is_processed = models.BooleanField(
        default = False
    )
    dump_file_name = models.TextField(
        null = True,
        blank = True
    )
    dump_content_type = models.TextField(
        null = True,
        blank = True
    )
    dump_file_size = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    dump_updated_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
