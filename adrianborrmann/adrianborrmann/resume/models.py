from django.db import models


class Website(models.Model):
    
    def __unicode__(self):
        return self.name
        
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    order = models.IntegerField(default=0)
    