"""
Site upload admin config
"""
from django.contrib.admin import ModelAdmin
class SiteUploadAdminConfig(ModelAdmin):
    """
    Site upload admin config
    """
    list_display = (
        'file_name',
        'file_content_type',
        'file_meta_data',
        'file_size',
        'created_at',
        'updated_at'
    )
    list_filter = (
        'file_name',
        'file_content_type',
        'file_meta_data',
        'file_size',
        'created_at',
        'updated_at'
    )
    search_fields = (
        'file_name',
        'file_content_type',
        'file_meta_data',
        'file_size',
        'created_at',
        'updated_at'
    )
    readonly_fields = (
        'file_name',
        'file_content_type',
        'file_meta_data',
        'file_size',
        'created_at',
        'updated_at'
    )
    list_per_page = 20
