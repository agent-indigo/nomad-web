"""
Domain block admin config
"""
from django.contrib.admin import ModelAdmin
class DomainBlockAdminConfig(ModelAdmin):
    """
    Domain block admin config
    """
    list_display = [
        'domain',
        'do_reject_media',
        'do_reject_reports',
        'severity',
        'private_comment',
        'public_comment',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'domain',
        'private_comment',
        'public_comment'
    ]
    list_editable = [
        'do_reject_media',
        'do_reject_reports'
    ]
    list_filter = [
        'domain',
        'do_reject_media',
        'do_reject_reports',
        'severity',
        'private_comment',
        'public_comment',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'domain',
        'do_reject_media',
        'do_reject_reports',
        'severity',
        'private_comment',
        'public_comment',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
