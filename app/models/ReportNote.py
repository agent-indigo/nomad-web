from django.db import models
class ReportNote(models.Model):
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