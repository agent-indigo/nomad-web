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
    list_filter = '__all__'
    search_fields = '__all__'
    readonly_fields = (
        'actor',
        'target_actor',
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
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args = (
                    note.actor_id.user_id.id,
                )
            ),
            note.actor_id.user_id.username
        )
    def target_actor(
        self: 'ActorModerationNoteAdminConfig',
        note: ActorModerationNote
    ) -> SafeText:
        """
        Link to the actor who was issued the moderation note
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args = (
                    note.target_actor_id.user_id.id,
                )
            ),
            note.target_actor_id.user_id.username
        )
