"""
Actor warning preset admin config
"""
from django.contrib.admin import ModelAdmin
class ActorWarningPresetAdminConfig(ModelAdmin):
    """
    Actor warning preset admin config
    """
    list_display = (
        'text',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'text',
    )
    list_filter = '__all__'
    search_fields = '__all__'
    readonly_fields = (
        'created_at',
        'updated_at'
    )
    list_per_page = 20
