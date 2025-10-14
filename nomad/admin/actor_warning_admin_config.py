"""
Actor warning admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
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
        'actor__display_name',
        'target_actor__display_name',
        'action',
        'text',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor__display_name',
        'target_actor__display_name',
        'action',
        'text',
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
        warning: ActorWarning
    ):
        """
        Link to the actor who issued the warning
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    warning.actor.user.id
                ]
            ),
            name = warning.actor.display_name
        )
    def target_actor(
        self,
        warning: ActorWarning
    ):
        """
        Link to the actor who was issued the warning
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    warning.target_actor.user.id
                ]
            ),
            name = warning.target_actor.display_name
        )
