"""
Admin action log admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from ..models import AdminActionLog
class AdminActionLogAdminConfig(ModelAdmin):
    """
    Admin action log admin config
    """
    list_display = [
        'actor',
        'target_actor',
        'target_actor_type',
        'action',
        'recorded_changes',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'action',
        'recorded_changes'
    ]
    list_filter = [
        'actor__display_name',
        'target_actor__display_name',
        'action',
        'recorded_changes',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor__display_name',
        'target_actor__display_name',
        'action',
        'recorded_changes',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'actor',
        'target_actor',
        'action',
        'recorded_changes',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self,
        log: AdminActionLog
    ):
        """
        Link to the actor who issued the action
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    log.actor.user.id
                ]
            ),
            name = log.actor.display_name
        )
    def target_actor(
        self,
        log: AdminActionLog
    ):
        """
        Link to the actor who received action
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    log.target_actor.user.id
                ]
            ),
            name = log.target_actor.display_name
        )
