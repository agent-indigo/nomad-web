from django.db import models
class ReportNote(models.Model):
  report_id = models.ForeignKey(
    'Report',
    on_delete=models.DO_NOTHING
  )
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  content = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)