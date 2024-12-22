from django.db import models
class AnnouncementMute(models.Model):
  class Meta:
    db_table = 'announcement_mutes'
    verbose_name = 'Announcement mute'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.OneToOneField(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='announcement_mutes',
    blank=True
  )
  announcement_id = models.OneToOneField(
    'Announcement',
    on_delete=models.DO_NOTHING,
    related_name='announcement_mutes',
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)