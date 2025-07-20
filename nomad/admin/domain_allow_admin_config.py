"""
Domain allow admin config
"""
from django.contrib.admin import ModelAdmin
class DoaminAllowAdminConfig(ModelAdmin):
    """
    Domain allow admin config
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
