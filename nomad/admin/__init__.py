"""
Import admin configurations and relevant models and register them here
"""
# Import admin site registration utility here
from django.contrib.admin import site
# Import admin configurations here
from .actor_moderation_note_admin_config import ActorModerationNoteAdminConfig
from .actor_warning_preset_admin_config import ActorWarningPresetAdminConfig
from .actor_warning_admin_config import ActorWarningAdminConfig
from .admin_action_log_admin_config import AdminActionLogAdminConfig
from .announcement_admin_config import AnnouncementAdminConfig
from .custom_emoji_category_admin_config import CustomEmojiCategoryAdminConfig
from .custom_emoji_admin_config import CustomEmojiAdminConfig
from .domain_allow_admin_config import DomainAllowAdminConfig
from .domain_block_admin_config import DomainBlockAdminConfig
from .email_domain_block_admin_config import EmailDomainBlockAdminConfig
from .media_attachment_admin_config import MediaAttachmentAdminConfig
from .poll_admin_config import PollAdminConfig
from .post_admin_config import PostAdminConfig
from .report_note_admin_config import ReportNoteAdminConfig
from .report_admin_config import ReportAdminConfig
from .site_upload_admin_config import SiteUploadAdminConfig
from .tag_admin_config import TagAdminConfig
# Import SQL table models here
from ..models import ActorModerationNote
from ..models import ActorWarningPreset
from ..models import ActorWarning
from ..models import AdminActionLog
from ..models import Announcement
from ..models import CustomEmojiCategory
from ..models import CustomEmoji
from ..models import DomainAllow
from ..models import DomainBlock
from ..models import EmailDomainBlock
from ..models import MediaAttachment
from ..models import Poll
from ..models import Post
from ..models import ReportNote
from ..models import Report
from ..models import SiteUpload
from ..models import Tag
# Register admin configurations here
site.register(
    ActorModerationNote,
    ActorModerationNoteAdminConfig
)
site.register(
    ActorWarningPreset,
    ActorWarningPresetAdminConfig
)
site.register(
    ActorWarning,
    ActorWarningAdminConfig
)
site.register(
    AdminActionLog,
    AdminActionLogAdminConfig
)
site.register(
    Announcement,
    AnnouncementAdminConfig
)
site.register(
    CustomEmojiCategory,
    CustomEmojiCategoryAdminConfig
)
site.register(
    CustomEmoji,
    CustomEmojiAdminConfig
)
site.register(
    DomainAllow,
    DomainAllowAdminConfig
)
site.register(
    DomainBlock,
    DomainBlockAdminConfig
)
site.register(
    EmailDomainBlock,
    EmailDomainBlockAdminConfig
)
site.register(
    MediaAttachment,
    MediaAttachmentAdminConfig
)
site.register(
    Poll,
    PollAdminConfig
)
site.register(
    Post,
    PostAdminConfig
)
site.register(
    ReportNote,
    ReportNoteAdminConfig
)
site.register(
    Report,
    ReportAdminConfig
)
site.register(
    SiteUpload,
    SiteUploadAdminConfig
)
site.register(
    Tag,
    TagAdminConfig
)
