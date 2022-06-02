from django.contrib import admin
from .models import JobSeeker, JobPost

# Register your models here.
admin.site.register(JobSeeker)
admin.site.register(JobPost)
