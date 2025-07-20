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
    list_display = (
        'post',
        'actor',
        'options',
        'expires_at',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'options',
    )
    list_filter = '__all__'
    search_fields = '__all__'
    readonly_fields = '__all__'
    list_per_page = 20
    def actor(
        self: 'PollAdminConfig',
        poll: Poll
    ) -> SafeText:
        """
        Link to the actor who created the poll
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:auth_user_change',
                args = (
                    poll.actor_id.user_id.id,
                )
            ),
            poll.actor_id.username
        )
    def post(
        self: 'PollAdminConfig',
        poll: Poll
    ) -> SafeText:
        """
        Link to the post containing the poll
        """
        return format_html(
            '<a href="{}">{}</a>',
            reverse(
                'admin:nomad_post_change',
                args = (
                    poll.post_id.id,
                )
            ),
            poll.post_id.text
        )
