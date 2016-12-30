from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('adrianborrmann.resume.views',
    url(r'^$', 'home', name='resume'),
)