"""
Actor moderation note admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from ..models import ActorModerationNote
class ActorModerationNoteAdminConfig(ModelAdmin):
    """
    Actor moderation note admin config
    """
    list_display = [
        'actor',
        'target_actor',
        'content',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'content'
    ]
    list_filter = [
        'actor__display_name',
        'target_actor__display_name',
        'content',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor__display_name',
        'target_actor__display_name',
        'content',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'actor',
        'target_actor',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self,
        note: ActorModerationNote
    ):
        """
        Link to the actor who issued the moderation note
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    note.actor.user.id
                ]
            ),
            name = note.actor.display_name
        )
    def target_actor(
        self,
        note: ActorModerationNote
    ):
        """
        Link to the actor who was issued the moderation note
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    note.target_actor.user.id
                ]
            ),
            name = note.target_actor.display_name
        )
