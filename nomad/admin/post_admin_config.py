"""
Post admin config
"""
from django.contrib.admin import ModelAdmin
from django.urls import reverse
from django.utils.html import format_html
from ..models import Post
class PostAdminConfig(ModelAdmin):
    """
    Post admin config
    """
    list_display = [
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
    ]
    list_display_links = [
        'text'
    ]
    list_filter = [
        'actor__display_name',
        'in_reply_to_actor__display_name',
        'in_reply_to_post__text',
        'reblog_of_post__text',
        'text',
        'language',
        'is_sensitive',
        'is_spoiler',
        'is_reply',
        'created_at',
        'updated_at'
    ]
    search_fields = [
        'actor__display_name',
        'in_reply_to_actor__display_name',
        'in_reply_to_post__text',
        'reblog_of_post__text',
        'text',
        'language',
        'is_sensitive',
        'is_spoiler',
        'is_reply',
        'created_at',
        'updated_at'
    ]
    readonly_fields = [
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
    ]
    list_per_page = 20
    def actor(
        self,
        post: Post
    ) :
        """
        Link to the actor who made the post
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    post.actor.user.id
                ]
            ),
            name = post.actor.display_name
        )
    def reply_to_actor(
        self,
        post: Post
    ) :
        """
        Link to the actor being replied to in the post
        """
        return format_html(
            '<a href="{url}">{name}</a>',
            url = reverse(
                'admin:auth_user_change',
                args = [
                    post.in_reply_to_actor.user.id
                ]
            ),
            name = post.in_reply_to_actor.display_name
        )
    def reply_to_post(
        self,
        post: Post
    ) :
        """
        Link to the post being replied to in the post
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_post_change',
                args = [
                    post.in_reply_to_post.id
                ]
            ),
            text = post.in_reply_to_post.text
        )
    def reblog_of_post(
            self,
            post: Post
    ) :
        """
        Link to the post being reblogged by the post
        """
        return format_html(
            '<a href="{url}">{text}</a>',
            url = reverse(
                'admin:nomad_post_change',
                args = [
                    post.reblog_of_post.id
                ]
            ),
            text = post.reblog_of_post.text
        )
