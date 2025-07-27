"""
Admin action log admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
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
        'actor_id__display_name',
        'target_actor_id__display_name',
        'action',
        'recorded_changes',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor_id__display_name',
        'target_actor_id__display_name',
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
        self: 'AdminActionLogAdminConfig',
        log: AdminActionLog
    ) -> SafeText:
        """
        Link to the actor who issued the action
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    log.actor_id.user_id.id
                ]
            ),
            name = log.actor_id.display_name
        )
    def target_actor(
        self: 'AdminActionLogAdminConfig',
        log: AdminActionLog
    ) -> SafeText:
        """
        Link to the actor who received action
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    log.target_actor_id.user_id.id
                ]
            ),
            name = log.target_actor_id.display_name
        )
