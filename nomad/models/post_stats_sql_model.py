"""
Post stats SQL table model
"""
from uuid import uuid4
from django.db import models
class PostStats(models.Model):
    """
    Post stats SQL table model
    """
    class Meta:
        """
        Post stats SQL table model
        """
        verbose_name = 'Post Stats'
        verbose_name_plural = verbose_name
        db_table = verbose_name_plural.lower().replace(
            ' ',
            '_'
        )
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    post_id = models.ForeignKey(
        to = 'Post',
        on_delete = models.CASCADE,
        related_name = 'stats'
    )
    replies_count = models.PositiveBigIntegerField(
        default = 0
    )
    reblogs_count = models.PositiveBigIntegerField(
        default = 0
    )
    favourites_count = models.PositiveBigIntegerField(
        default = 0
    )
    bookmarks_count = models.PositiveSmallIntegerField(
        default = 0
    )
    created_at = models.DateTimeField(
        auto_now_add = True
    )
    updated_at = models.DateTimeField(
        auto_now = True
    )
