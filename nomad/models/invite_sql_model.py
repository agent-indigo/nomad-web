"""
Invite SQL table model
"""
from uuid import uuid4
from django.db import models
class Invite(models.Model):
    """
    Invite SQL table model
    """
    class Meta:
        """
        Invite SQL table model meta class
        """
        verbose_name = 'Invite'
        verbose_name_plural = f'{verbose_name}s'
        db_table = verbose_name_plural.lower()
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'invites'
    )
    code = models.TextField(
        unique = True
    )
    comment = models.TextField(
        null = True,
        blank = True
    )
    is_used = models.BooleanField(
        default = False
    )
    do_auto_follow = models.BooleanField(
        default = True
    )
    expires_at = models.DateTimeField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
