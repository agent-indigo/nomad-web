"""
Poll admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import Poll
class PollAdminConfig(ModelAdmin):
    """
    Poll admin config
    """
    list_display = [
        'post',
        'actor',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    list_display_links = [
        'options'
    ]
    list_filter = [
        'post_id__text',
        'actor_id__display_name',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'post_id__text',
        'actor_id__display_name',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'post_id__text',
        'actor_id__display_name',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self: 'PollAdminConfig',
        poll: Poll
    ) -> SafeText:
        """
        Link to the actor who created the poll
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    poll.actor_id.user_id.id
                ]
            ),
            name = poll.actor_id.display_name
        )
    def post(
        self: 'PollAdminConfig',
        poll: Poll
    ) -> SafeText:
        """
        Link to the post containing the poll
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_post_change',
                args = [
                    poll.post_id.id
                ]
            ),
            text = poll.post_id.text
        )
