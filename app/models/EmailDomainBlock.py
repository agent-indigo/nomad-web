from django.db import models
class EmailDomainBlock(models.Model):
  class Meta:
    db_table = 'email_domain_blocks'
    verbose_name = 'Email domain block'
    verbose_name_plural = f'{verbose_name}s'
  domain = models.TextField(unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)