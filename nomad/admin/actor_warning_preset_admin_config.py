"""
Actor warning preset admin config
"""
from django.contrib.admin import ModelAdmin
class ActorWarningPresetAdminConfig(ModelAdmin):
    """
    Actor warning preset admin config
    """
    list_display = [
        'text',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'text'
    ]
    list_filter = [
        'text',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'text',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
