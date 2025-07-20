"""
Site upload SQL table model
"""
from uuid import uuid4
from django.db import models
class SiteUpload(models.Model):
    """
    Site upload SQL table model
    """
    class Meta:
        """
        Site upload SQL table model meta class
        """
        verbose_name = 'Site Upload'
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
    var = models.TextField(
        unique = True
    )
    file_name = models.TextField(
        null = True,
        blank = True
    )
    file_content_type = models.TextField(
        null = True,
        blank = True
    )
    file_meta_data = models.TextField(
        null = True,
        blank = True
    )
    file_size = models.PositiveIntegerField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
