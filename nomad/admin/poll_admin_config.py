"""
Poll admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
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
        'post__text',
        'actor__display_name',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'post__text',
        'actor__display_name',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
        'post',
        'actor',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    ]
    list_per_page = 20
    def actor(
        self,
        poll: Poll
    ):
        """
        Link to the actor who created the poll
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    poll.actor.user.id
                ]
            ),
            name = poll.actor.display_name
        )
    def post(
        self,
        poll: Poll
    ):
        """
        Link to the post containing the poll
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_post_change',
                args = [
                    poll.post.id
                ]
            ),
            text = poll.post.text
        )
