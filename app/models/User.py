from django.db import models
from django.contrib.auth.models import AbstractUser
from app.settings import auto_approve_new_users
class User(AbstractUser):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    unique=True
  )
  invite_id = models.ForeignKey(
    'Invite',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  reset_password_token = models.TextField(
    unique=True,
    blank=True
  )
  confirmation_token = models.TextField(
    unique=True,
    blank=True
  )
  remember_token = models.TextField(
    unique=True,
    blank=True
  )
  sign_in_count = models.PositiveBigIntegerField(default=0)
  admin = models.BooleanField(default=False)
  filtered_languages = [models.TextField(blank=True)]
  moderator = models.BooleanField(default=False)
  approved = models.BooleanField(default=auto_approve_new_users)
  reset_password_sent_at = models.DateTimeField(blank=True)
  remember_created_at = models.DateTimeField(blank=True)
  current_sign_in_at = models.DateTimeField(blank=True)
  last_sign_in_at = models.DateTimeField(blank=True)
  current_sign_in_ip = models.IPAddressField(blank=True)
  last_sign_in_ip = models.IPAddressField(blank=True)
  confirmed_at = models.DateTimeField(blank=True)
  confirmation_sent_at = models.DateTimeField(blank=True)
  unconfirmed_email = models.EmailField(blank=True)
  locale = models.TextField(blank=True)
  consumed_timestep = models.PositiveBigIntegerField(blank=True)
  last_emailed_at = models.DateTimeField(blank=True)
  chosen_languages = [models.TextField(blank=True)]
  created_by_application_id = models.ForeignKey(
    'OAuthApplication',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)