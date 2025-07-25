"""
Report admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import Report
class ReportAdminConfig(ModelAdmin):
    """
    Report admin config
    """
    list_display = (
        'actor',
        'target_actor',
        'action_taken_by_actor',
        'assigned_to_actor',
        'comment',
        'is_resolved',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'comment',
    )
    list_filter = '__all__'
    search_fields = '__all__'
    list_editable = (
        'is_resolved',
    )
    readonly_fields = (
        'actor',
        'target_actor',
        'created_at',
        'updated_at'
    )
    list_per_page = 20
    def actor(
        self: 'ReportAdminConfig',
        report: Report
    ) -> SafeText:
        """
        Link to the actor who filed the report
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    report.actor_id.user_id.id,
                )
            ),
            text = report.actor_id.username
        )
    def target_actor(
        self: 'ReportAdminConfig',
        report: Report
    ) -> SafeText:
        """
        Link to the actor named in the report
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    report.target_actor_id.user_id.id,
                )
            ),
            text = report.target_actor_id.username
        )
    def action_taken_by_actor(
        self: 'ReportAdminConfig',
        report: Report
    ) -> SafeText:
        """
        Link to the actor who took action on the report
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    report.action_taken_by_actor_id.user_id.id,
                )
            ),
            text = report.action_taken_by_actor_id.username
        )
    def assigned_to_actor(
        self: 'ReportAdminConfig',
        report: Report
    ) -> SafeText:
        """
        Link to the actor who is assigned to resolve the report
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    report.assigned_to_actor_id.user_id.id,
                )
            ),
            text = report.assigned_to_actor_id.username
        )
