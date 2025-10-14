"""
Report note admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from ..models import ReportNote
class ReportNoteAdminConfig(ModelAdmin):
    """
    Report note admin config
    """
    list_display = [
        'actor',
        'report',
        'content',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'content'
    ]
    list_filter = [
        'actor__display_name',
        'report__comment',
        'content',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor__display_name',
        'report__comment',
        'content',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'actor',
        'report',
        'content',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self,
        note: ReportNote
    ):
        """
        Link to the actor who created the report note
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    note.actor.user.id
                ]
            ),
            name = note.actor.username
        )
    def report(
        self,
        note: ReportNote
    ):
        """
        Link to the report referenced in the note
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_report_change',
                args = [
                    note.report.id
                ]
            ),
            text = note.report.comment
        )
