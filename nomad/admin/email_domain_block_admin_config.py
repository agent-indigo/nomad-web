"""
Email domain block admin config
"""
from django.contrib.admin import ModelAdmin
class EmailDomainBlockAdminConfig(ModelAdmin):
    """
    Email domain block admin config
    """
    list_display = (
        'domain',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'domain',
    )
    list_filter = (
        'domain',
        'created_at',
        'updated_at'
    )
    search_fields = (
        'domain',
        'created_at',
        'updated_at'
    )
    readonly_fields = (
        'created_at',
        'updated_at'
    )
    list_per_page = 20
