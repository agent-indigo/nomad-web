from django.db import models
class DomainAllow(models.Model):
  domain = models.TextField(unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)