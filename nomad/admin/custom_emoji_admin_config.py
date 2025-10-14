"""
Custom emoji admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
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
        'actor__display_name',
        'category__name',
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
        'actor__display_name',
        'category__name',
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
        self,
        emoji = CustomEmoji
    ):
        """
        Link to the actor who created the custom emoji
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    emoji.actor.user.id
                ]
            ),
            name = emoji.actor.display_name
        )
    def category(
        self,
        emoji: CustomEmoji
    ):
        """
        Link to the category of the custom emoji
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:nomad_customemojicategory_change',
                args = [
                    emoji.category.id
                ]
            ),
            name = emoji.category.name
        )
    def domain(
        self,
        emoji: CustomEmoji
    ):
        """
        Link to the domain of the custom emoji
        """
        return format_html(
            '<a href="{url}">{url}</a>',
            url = emoji.domain
        )
    def uri(
        self,
        emoji: CustomEmoji
    ):
        """
        Link to the URI of the custom emoji
        """
        return format_html(
            '<a href="{url}">{url}</a>',
            url = emoji.uri
        )
