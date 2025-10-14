"""
Report admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from ..models import Report
class ReportAdminConfig(ModelAdmin):
    """
    Report admin config
    """
    list_display = [
        'actor',
        'target_actor',
        'action_taken_by_actor',
        'assigned_to_actor',
        'comment',
        'is_resolved',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'comment'
    ]
    list_filter = [
        'actor__display_name',
        'target_actor__display_name',
        'action_taken_by_actor__display_name',
        'assigned_to_actor__display_name',
        'comment',
        'is_resolved',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor__display_name',
        'target_actor__display_name',
        'action_taken_by_actor__display_name',
        'assigned_to_actor__display_name',
        'comment',
        'is_resolved',
        'created_at',
        'updated_at'
    ]
    list_editable = [
        'is_resolved'
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
        report: Report
    ):
        """
        Link to the actor who filed the report
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    report.actor.user.id
                ]
            ),
            name = report.actor.username
        )
    def target_actor(
        self,
        report: Report
    ):
        """
        Link to the actor named in the report
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    report.target_actor.user.id
                ]
            ),
            name = report.target_actor.username
        )
    def action_taken_by_actor(
        self,
        report: Report
    ):
        """
        Link to the actor who took action on the report
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    report.action_taken_by_actor.user.id
                ]
            ),
            name = report.action_taken_by_actor.username
        )
    def assigned_to_actor(
        self,
        report: Report
    ):
        """
        Link to the actor who is assigned to resolve the report
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    report.assigned_to_actor.user.id
                ]
            ),
            name = report.assigned_to_actor.username
        )
