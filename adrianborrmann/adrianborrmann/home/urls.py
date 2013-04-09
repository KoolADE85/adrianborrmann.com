from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('adrianborrmann.home.views',
    url(r'^$', 'home', name='home'),
)