from django.db import models
class AnnouncementReaction(models.Model):
  class Meta:
    db_table = 'announcement_reactions'
    verbose_name = 'Announcement reaction'
    verbose_name_plural = f'{verbose_name}s'
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='announcement_reactions',
    blank=True
  )
  announcement_id = models.ForeignKey(
    'Announcement',
    on_delete=models.DO_NOTHING,
    related_name='announcement_reactions',
    blank=True
  )
  custom_emoji_id = models.ForeignKey(
    'CustomEmoji',
    on_delete=models.DO_NOTHING,
    related_name='announcement_reactions',
    blank=True
  )
  name = models.TextField(unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)