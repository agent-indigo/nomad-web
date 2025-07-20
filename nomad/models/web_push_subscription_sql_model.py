"""
Web push SQL table model
"""
from uuid import uuid4
from django.db import models
class WebPushSubscription(models.Model):
    """
    Web push subscription SQL table model
    """
    class Meta:
        """
        Web push subscription SQL table model meta class
        """
        verbose_name = 'Web Push Subscription'
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
    access_token_id = models.ForeignKey(
        to = 'knox.AuthToken',
        on_delete = models.DO_NOTHING,
        related_name = 'web_push_subscriptions',
        null = True,
        blank = True
    )
    user_id = models.ForeignKey(
        to = 'auth.User',
        on_delete = models.CASCADE,
        related_name = 'web_push_subscriptions'
    )
    endpoint = models.TextField()
    key_p256dh = models.TextField()
    key_auth = models.TextField()
    data = models.TextField(
        null = True,
        blank = True
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
