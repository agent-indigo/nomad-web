"""
URL configuration for nomad project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib.admin import site
from django.urls import path
from django.conf.urls.static import static
from knox.views import (
    LogoutView,
    LogoutAllView
)
from .api_views import (
    CurrentUserApiView,
    RegistrationApiView,
    LoginApiView
)
from .settings import (
    DEBUG,
    STATIC_URL,
    STATIC_ROOT
)
from .views import index
urlpatterns = [
    path(
        '',
        index
    ),
    path(
        'admin/',
        site.urls
    ),
    path(
        'api/auth/login',
        LoginApiView.as_view()
    ),
    path(
        'api/auth/logout',
        LogoutView.as_view(),
        name = 'knox_logout'
    ),
    path(
        'api/auth/logoutall',
        LogoutAllView.as_view(),
        name = 'knox_logoutall'
    ),
    path(
        'api/auth/register',
        RegistrationApiView.as_view()
    ),
    path(
        'api/auth/user',
        CurrentUserApiView.as_view()
    )
]
# Serve static files only during development
if DEBUG is True:
    urlpatterns += static(
        STATIC_URL,
        document_root = STATIC_ROOT
    )
