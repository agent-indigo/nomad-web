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
    list_display = (
        'actor',
        'target_actor',
        'target_type',
        'action',
        'recorded_changes',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'action',
        'recorded_changes'
    )
    list_filter = '__all__'
    search_fields = '__all__'
    readonly_fields = '__all__'
    list_per_page = 20
    def actor(
        self: 'AdminActionLogAdminConfig',
        log: AdminActionLog
    ) -> SafeText:
        """
        Link to the actor who issued the action
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args=(
                    log.actor_id.user_id.id,
                )
            ),
            log.actor_id.user_id.username
        )
    def target_actor(
        self: 'AdminActionLogAdminConfig',
        log: AdminActionLog
    ) -> SafeText:
        """
        Link to the actor who received action
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args=(
                    log.target_actor_id.user_id.id,
                )
            ),
            log.target_actor_id.user_id.username
        )
