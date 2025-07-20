"""
Domain block SQL table model
"""
from uuid import uuid4
from django.db import models
class DomainBlock(models.Model):
    """
    Domain block SQL table model
    """
    class Meta:
        """
        Domain block SQL table model meta class
        """
        verbose_name = "Domain Block"
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
    domain = models.TextField(
        unique = True
    )
    do_reject_media = models.BooleanField(
        default = True
    )
    do_reject_reports = models.BooleanField(
        default = True
    )
    severity = models.PositiveBigIntegerField(
        null = True,
        blank = True
    )
    private_comment = models.TextField(
        null = True,
        blank = True
    )
    public_comment = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
