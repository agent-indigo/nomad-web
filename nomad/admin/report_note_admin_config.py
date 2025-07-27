"""
Report note admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
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
        'comment'
    ]
    list_filter = [
        'actor_id__display_name',
        'report_id__comment',
        'content',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor_id__display_name',
        'report_id__comment',
        'content',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'actor_id__display_name',
        'report_id__comment',
        'content',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self: 'ReportNoteAdminConfig',
        note: ReportNote
    ) -> SafeText:
        """
        Link to the actor who created the report note
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    note.actor_id.user_id.id
                ]
            ),
            name = note.actor_id.username
        )
    def report(
        self: 'ReportNoteAdminConfig',
        note: ReportNote
    ) -> SafeText:
        """
        Link to the report referenced in the note
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_report_change',
                args = [
                    note.report_id.id
                ]
            ),
            text = note.report_id.comment
        )
