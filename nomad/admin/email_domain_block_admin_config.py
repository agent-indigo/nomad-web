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
    list_filter = '__all__'
    search_fields = '__all__'
    readonly_fields = (
        'created_at',
        'updated_at'
    )
    list_per_page = 20
