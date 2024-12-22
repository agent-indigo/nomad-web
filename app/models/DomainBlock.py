from django.db import models
class DomainBlock(models.Model):
  class Meta:
    db_table = 'domain_blocks'
    verbose_name = 'Domain block'
    verbose_name_plural = f'{verbose_name}s'
  domain = models.TextField(unique=True)
  reject_media = models.BooleanField(default=True)
  reject_reports = models.BooleanField(default=True)
  severity = models.PositiveBigIntegerField(blank=True)
  private_comment = models.TextField(blank=True)
  public_comment = models.TextField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)