"""
Custom emoji category admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import CustomEmojiCategory
class CustomEmojiCategoryAdminConfig(ModelAdmin):
    """
    Custom emoji category admin config
    """
    list_display = (
        'actor',
        'name',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'name',
    )
    list_filter = (
        'actor_id__display_name',
        'name',
        'created_at',
        'updated_at'
    )
    search_fields = (
        'actor_id__display_name',
        'name',
        'created_at',
        'updated_at'
    )
    readonly_fields = (
        'actor_id__display_name',
        'created_at',
        'updated_at'
    )
    list_per_page = 20
    def actor(
        self: 'CustomEmojiCategoryAdminConfig',
        category: CustomEmojiCategory
    ) -> SafeText:
        """
        Link to the actor who created the custom emoji category
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    category.actor_id.user_id.id,
                )
            ),
            name = category.actor_id.username
        )
