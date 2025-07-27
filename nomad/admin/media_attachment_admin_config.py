"""
Media attachment admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import MediaAttachment
class MediaAttachmentAdminConfig(ModelAdmin):
    """
    Media attachment admin config
    """
    list_display = [
        'post',
        'actor',
        'short_code',
        'description',
        'remote_url',
        'file_name',
        'file_meta_data',
        'file_content_type',
        'file_size',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'short_code',
        'description'
    ]
    list_filter = [
        'post_id__text',
        'actor_id__display_name',
        'short_code',
        'description',
        'remote_url',
        'file_name',
        'file_meta_data',
        'file_content_type',
        'file_size',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'post_id__text',
        'actor_id__display_name',
        'short_code',
        'description',
        'remote_url',
        'file_name',
        'file_meta_data',
        'file_content_type',
        'file_size',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'post_id__text',
        'actor_id__display_name',
        'short_code',
        'description',
        'remote_url',
        'file_name',
        'file_meta_data',
        'file_content_type',
        'file_size',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self: 'MediaAttachmentAdminConfig',
        file: MediaAttachment
    ) -> SafeText:
        """
        Link to the actor who made the post that the file is attached to
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    file.actor_id.user_id.id
                ]
            ),
            name = file.actor_id.display_name
        )
    def post(
        self: 'MediaAttachmentAdminConfig',
        file: MediaAttachment
    ) -> SafeText:
        """
        Link to the post that the file is attached to
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_post_change',
                args = [
                    file.post_id.id
                ]
            ),
            text = file.post_id.text
        )
    def remote_url(
        self: 'MediaAttachmentAdminConfig',
        file: MediaAttachment
    ) -> SafeText:
        """
        Link to the file
        """
        return format_html(
            '<a href="{url}">{url}</a>',
            url = file.remote_url
        )
