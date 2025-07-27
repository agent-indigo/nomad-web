"""
Tag admin config
"""
from django.contrib.admin import ModelAdmin
class TagAdminConfig(ModelAdmin):
    """
    Tag admin config
    """
    list_display = [
        'name',
        'is_usable',
        'is_trendable',
        'is_listable',
        'max_score',
        'max_score_at',
        'last_post_at',
        'reviewed_at',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'name'
    ]
    list_editable = [
        'is_usable',
        'is_trendable',
        'is_listable'
    ]
    list_filter = [
        'name',
        'is_usable',
        'is_trendable',
        'is_listable',
        'max_score',
        'max_score_at',
        'last_post_at',
        'reviewed_at',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'name',
        'is_usable',
        'is_trendable',
        'is_listable',
        'max_score',
        'max_score_at',
        'last_post_at',
        'reviewed_at',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'name',
        'is_usable',
        'is_trendable',
        'is_listable',
        'max_score',
        'max_score_at',
        'last_post_at',
        'reviewed_at',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
