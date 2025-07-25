"""
Post admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import SafeText
from ..models import Post
class PostAdminConfig(ModelAdmin):
    """
    Post admin config
    """
    list_display = (
        'actor',
        'reply_to_actor',
        'reply_to_post',
        'reblog_of_post',
        'text',
        'language',
        'is_sensitive',
        'is_spoiler',
        'is_reply',
        'created_at',
        'updated_at'
    )
    list_display_links = (
        'text',
    )
    list_filter = '__all__'
    search_fields = '__all__'
    readonly_fields = '__all__'
    list_per_page = 20
    def actor(
        self: 'PostAdminConfig',
        post: Post
    ) -> SafeText:
        """
        Link to the actor who made the post
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    post.actor_id.user_id.id,
                )
            ),
            text = post.actor_id.username
        )
    def reply_to_actor(
        self: 'PostAdminConfig',
        post: Post
    ) -> SafeText:
        """
        Link to the actor being replied to in the post
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = (
                    post.in_reply_to_actor_id.user_id.id,
                )
            ),
            text = post.in_reply_to_actor_id.username
        )
    def reply_to_post(
        self: 'PostAdminConfig',
        post: Post
    ) -> SafeText:
        """
        Link to the post being replied to in the post
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_post_change',
                args = (
                    post.in_reply_to_post_id.id,
                )
            ),
            text = post.in_reply_to_post_id.text
        )
    def reblog_of_post(
            self: 'PostAdminConfig',
            post: Post
    ) -> SafeText:
        """
        Link to the post being reblogged by the post
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad:post:change',
                args = (
                    post.reblog_of_post_id.id,
                )
            ),
            text = post.reblog_of_post_id.text
        )
