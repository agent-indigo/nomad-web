from django.db import models
class AnnouncementMute(models.Model):
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
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)