from django.db import models
class AnnouncementReaction(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  announcement_id = models.ForeignKey(
    'Announcement',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  custom_emoji_id = models.ForeignKey(
    'CustomEmoji',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  name = models.TextField(unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)