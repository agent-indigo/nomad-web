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
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from knox import views as knox_views
from rest_framework.routers import DefaultRouter
from .api_views import CurrentUserApiViewSet, RegistrationApiView
from .settings import DEBUG, STATIC_URL, STATIC_ROOT
from .views import index
CURRENT_USER_ROUTER = DefaultRouter()
CURRENT_USER_ROUTER.register(
    '/',
    CurrentUserApiViewSet
)
urlpatterns = [
    path(
        '',
        index
    ),
    path(
        'admin/',
        admin.site.urls
    ),
    path(
        'api/auth/',
        include('knox.urls')
    ),
    path(
        'api/auth/user',
        CURRENT_USER_ROUTER.urls
    ),
    path(
        'api/auth/logout',
        knox_views.LogoutView.as_view(),
        name = 'knox_logout'
    ),
    path(
        'api/auth/register',
        RegistrationApiView.as_view()
    )
]
# Serve static files only during development
if DEBUG is True:
    urlpatterns += static(
        STATIC_URL,
        document_root = STATIC_ROOT
    )
