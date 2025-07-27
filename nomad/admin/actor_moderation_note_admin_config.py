"""
Actor moderation note admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import ActorModerationNote
class ActorModerationNoteAdminConfig(ModelAdmin):
    """
    Actor moderation note admin config
    """
    list_display = (
        'actor',
        'target_actor',
        'content',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'content',
    )
    list_filter = (
        'actor_id__display_name',
        'target_actor_id___display_name',
        'content',
        'created_at',
        'updated_at'
    )
    search_fields = (
        'actor_id__display_name',
        'target_actor_id___display_name',
        'content',
        'created_at',
        'updated_at'
    )
    readonly_fields = (
        'actor_id__display_name',
        'target_actor_id__display_name',
        'created_at',
        'updated_at'
    )
    list_per_page = 20
    def actor(
        self: 'ActorModerationNoteAdminConfig',
        note: ActorModerationNote
    ) -> SafeText:
        """
        Link to the actor who issued the moderation note
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    note.actor_id.user_id.id,
                )
            ),
            name = note.actor_id.display_name
        )
    def target_actor(
        self: 'ActorModerationNoteAdminConfig',
        note: ActorModerationNote
    ) -> SafeText:
        """
        Link to the actor who was issued the moderation note
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    note.target_actor_id.user_id.id,
                )
            ),
            name = note.target_actor_id.display_name
        )
