"""
Actor warning admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import ActorWarning
class ActorWarningAdminConfig(ModelAdmin):
    """
    Actor warning admin config
    """
    list_display = (
        'actor',
        'target_actor',
        'action',
        'text',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'action',
        'text'
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
        self: 'ActorWarningAdminConfig',
        warning: ActorWarning
    ) -> SafeText:
        """
        Link to the actor who issued the warning
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args = (
                    warning.actor_id.user_id.id,
                )
            ),
            warning.actor_id.user_id.username
        )
    def target_actor(
        self: 'ActorWarningAdminConfig',
        warning: ActorWarning
    ) -> SafeText:
        """
        Link to the actor who was issued the warning
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args = (
                    warning.target_actor_id.user_id.id,
                )
            ),
            warning.target_actor_id.user_id.username
        )
