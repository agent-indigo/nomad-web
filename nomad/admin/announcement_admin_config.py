"""
Announcement admin config
"""
from django.contrib.admin import ModelAdmin
class AnnouncementAdminConfig(ModelAdmin):
    """
    Announcement admin config
    """
    list_display = [
        'text',
        'is_published',
        'is_all_day',
        'scheduled_at',
        'starts_at',
        'ends_at',
        'published_at',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'text'
    ]
    list_editable = [
        'is_published',
        'is_all_day'
    ]
    list_filter = [
        'text',
        'is_published',
        'is_all_day',
        'scheduled_at',
        'starts_at',
        'ends_at',
        'published_at',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'text',
        'is_published',
        'is_all_day',
        'scheduled_at',
        'starts_at',
        'ends_at',
        'published_at',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
