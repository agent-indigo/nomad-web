from django.db import models
class ReportNote(models.Model):
  class Meta:
    db_table = 'report_notes'
    verbose_name = 'Report note'
    verbose_name_plural = f'{verbose_name}s'
  report_id = models.ForeignKey(
    'Report',
    on_delete=models.DO_NOTHING,
    related_name='report_notes'
  )
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    related_name='report_notes'
  )
  content = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)