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
    list_display = [
        'actor',
        'target_actor',
        'action',
        'text',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'action',
        'text'
    ]
    list_filter = [
        'actor_id__display_name',
        'target_actor_id__display_name',
        'action',
        'text',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor_id__display_name',
        'target_actor_id__display_name',
        'action',
        'text',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'actor_id__display_name',
        'target_actor_id__display_name',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self: 'ActorWarningAdminConfig',
        warning: ActorWarning
    ) -> SafeText:
        """
        Link to the actor who issued the warning
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    warning.actor_id.user_id.id
                ]
            ),
            name = warning.actor_id.display_name
        )
    def target_actor(
        self: 'ActorWarningAdminConfig',
        warning: ActorWarning
    ) -> SafeText:
        """
        Link to the actor who was issued the warning
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    warning.target_actor_id.user_id.id
                ]
            ),
            name = warning.target_actor_id.display_name
        )
