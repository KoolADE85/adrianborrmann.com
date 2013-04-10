from django.http import HttpResponseRedirect
from django.shortcuts import render

from adrianborrmann.settings import TEMPLATE_DEBUG
from adrianborrmann.resume.models import Website


def home(request):
    context = {
        'websites': Website.objects.order_by('-order'),
        'debug': TEMPLATE_DEBUG
    }
    return render(request, 'resume/landing.html', context)
