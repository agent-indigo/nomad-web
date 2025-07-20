"""
Email domain block SQL table model
"""
from uuid import uuid4
from django.db import models
class EmailDomainBlock(models.Model):
    """
    Email domain block SQL table model
    """
    class Meta:
        """
        Email domain block SQL table model meta class
        """
        verbose_name = 'Email Domain Block'
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
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
