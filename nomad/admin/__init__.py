"""
Import admin configs and corresponding SQL table models and register them here.
"""
# Import admin site registration utility here.
from django.contrib.admin import site
# Import admin configs here.
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
# Import SQL table models here.
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
# Pair admin configs with corresponding SQL table model here.
PAIRS = ({
    'config': ActorModerationNoteAdminConfig,
    'model': ActorModerationNote
}, {
    'config': ActorWarningPresetAdminConfig,
    'model': ActorWarningPreset
}, {
    'config': ActorWarningAdminConfig,
    'model': ActorWarning
}, {
    'config': AdminActionLogAdminConfig,
    'model': AdminActionLog
}, {
    'config': AnnouncementAdminConfig,
    'model': Announcement
}, {
    'config': CustomEmojiCategoryAdminConfig,
    'model': CustomEmojiCategory
}, {
    'config': CustomEmojiAdminConfig,
    'model': CustomEmoji
}, {
    'config': DomainAllowAdminConfig,
    'model': DomainAllow
}, {
    'config': DomainBlockAdminConfig,
    'model': DomainBlock
}, {
    'config': EmailDomainBlockAdminConfig,
    'model': EmailDomainBlock
}, {
    'config': MediaAttachmentAdminConfig,
    'model': MediaAttachment
}, {
    'config': PollAdminConfig,
    'model': Poll
}, {
    'config': PostAdminConfig,
    'model': Post
}, {
    'config': ReportNoteAdminConfig,
    'model': ReportNote
}, {
    'config': ReportAdminConfig,
    'model': Report
}, {
    'config': SiteUploadAdminConfig,
    'model': SiteUpload
}, {
    'config': TagAdminConfig,
    'model': Tag
})
# Register admin configs and corresponding SQL table models here.
for PAIR in PAIRS:
    site.register(
        PAIR.get('model'),
        PAIR.get('config')
    )
