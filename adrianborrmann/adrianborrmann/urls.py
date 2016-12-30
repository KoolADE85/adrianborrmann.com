from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'adrianborrmann.views.home', name='home'),
    # url(r'^adrianborrmann/', include('adrianborrmann.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    url(r'^admin/', include(admin.site.urls)),
    (r'^$', TemplateView.as_view(template_name='landing.html')),
    (r'^cv/', include('adrianborrmann.resume.urls')),
)
