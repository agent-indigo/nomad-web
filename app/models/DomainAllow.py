from django.db import models
class DomainAllow(models.Model):
  class Meta:
    db_table = 'domain_allows'
    verbose_name = 'Domain allow'
    verbose_name_plural = f'{verbose_name}s'
  domain = models.TextField(unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)