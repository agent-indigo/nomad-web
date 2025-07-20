"""
User invite SQL table model
"""
from uuid import uuid4
from django.db import models
class UserInvite(models.Model):
    """
    User invite SQL table model
    """
    class Meta:
        """
        User invite SQL table model meta class
        """
        verbose_name = 'User Invite'
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
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'invite_requests',
        null = True,
        blank = True
    )
    text = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
