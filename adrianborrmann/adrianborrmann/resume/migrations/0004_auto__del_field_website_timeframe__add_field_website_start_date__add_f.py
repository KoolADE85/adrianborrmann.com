# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting field 'Website.timeframe'
        db.delete_column(u'resume_website', 'timeframe')

        # Adding field 'Website.start_date'
        db.add_column(u'resume_website', 'start_date',
                      self.gf('django.db.models.fields.DateField')(default=datetime.datetime(2013, 9, 15, 0, 0)),
                      keep_default=False)

        # Adding field 'Website.end_date'
        db.add_column(u'resume_website', 'end_date',
                      self.gf('django.db.models.fields.DateField')(default=datetime.datetime(2013, 9, 15, 0, 0)),
                      keep_default=False)


    def backwards(self, orm):
        # Adding field 'Website.timeframe'
        db.add_column(u'resume_website', 'timeframe',
                      self.gf('django.db.models.fields.CharField')(default='', max_length=50),
                      keep_default=False)

        # Deleting field 'Website.start_date'
        db.delete_column(u'resume_website', 'start_date')

        # Deleting field 'Website.end_date'
        db.delete_column(u'resume_website', 'end_date')


    models = {
        u'resume.website': {
            'Meta': {'object_name': 'Website'},
            'description': ('django.db.models.fields.TextField', [], {}),
            'end_date': ('django.db.models.fields.DateField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'order': ('django.db.models.fields.IntegerField', [], {'default': '0'}),
            'start_date': ('django.db.models.fields.DateField', [], {}),
            'url': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        }
    }

    complete_apps = ['resume']