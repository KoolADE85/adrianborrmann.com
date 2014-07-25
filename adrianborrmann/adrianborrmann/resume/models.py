from django.db import models


class Website(models.Model):
    
    def __unicode__(self):
        return self.name
        
    name = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    is_current = models.BooleanField()
    description = models.TextField(blank=True)
    url = models.CharField(max_length=200, blank=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ('order', '-end_date')
