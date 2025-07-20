"""
Domain allow SQL table model
"""
from uuid import uuid4
from django.db import models
class DomainAllow(models.Model):
    """
    Domain allow SQL table model
    """
    class Meta:
        """
        Domain allow SQL table model meta class
        """
        verbose_name = 'Domain Allow'
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
    domain = models.URLField(
        unique = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
