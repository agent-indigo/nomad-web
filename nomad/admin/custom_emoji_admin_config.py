"""
Custom emoji admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import CustomEmoji
class CustomEmojiAdminConfig(ModelAdmin):
    """
    Custom emoji admin config
    """
    list_display = [
        'actor',
        'category',
        'short_code',
        'domain',
        'is_disabled',
        'is_visible_in_selector',
        'image_file_name',
        'image_content_type',
        'image_file_size',
        'image_remote_url',
        'image_uploaded_at',
        'uri',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'short_code'
    ]
    list_editable = [
        'is_disabled',
        'is_visible_in_selector'
    ]
    list_filter = [
        'actor_id__display_name',
        'category_id__name',
        'short_code',
        'domain',
        'is_disabled',
        'is_visible_in_selector',
        'image_file_name',
        'image_content_type',
        'image_file_size',
        'image_remote_url',
        'image_uploaded_at',
        'uri',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor_id__display_name',
        'category_id__name',
        'short_code',
        'domain',
        'is_disabled',
        'is_visible_in_selector',
        'image_file_name',
        'image_content_type',
        'image_file_size',
        'image_remote_url',
        'image_uploaded_at',
        'uri',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'actor',
        'short_code',
        'domain',
        'image_file_name',
        'image_content_type',
        'image_file_size',
        'image_remote_url',
        'image_uploaded_at',
        'uri',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self: 'CustomEmojiAdminConfig',
        emoji = CustomEmoji
    ) -> SafeText:
        """
        Link to the actor who created the custom emoji
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    emoji.actor_id.user_id.id
                ]
            ),
            name = emoji.actor_id.display_name
        )
    def category(
        self: 'CustomEmojiAdminConfig',
        emoji: CustomEmoji
    ) -> SafeText:
        """
        Link to the category of the custom emoji
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:nomad_customemojicategory_change',
                args = [
                    emoji.category_id.id
                ]
            ),
            name = emoji.category_id.name
        )
    def domain(
        self: 'CustomEmojiAdminConfig',
        emoji: CustomEmoji
    ) -> SafeText:
        """
        Link to the domain of the custom emoji
        """
        return format_html(
            '<a href="{url}">{url}</a>',
            url = emoji.domain
        )
    def uri(
        self: 'CustomEmojiAdminConfig',
        emoji: CustomEmoji
    ) -> SafeText:
        """
        Link to the URI of the custom emoji
        """
        return format_html(
            '<a href="{url}">{url}</a>',
            url = emoji.uri
        )
