from rest_framework import viewsets, filters
from django.http import HttpResponse
from .serializers import JobSeekerSerializer, JobPostSerializer, JobsSerializer 
from .models import JobSeeker, JobPost, Jobs
from rest_framework.decorators import api_view

# Create your views here.

class JobSeekerViewSet(viewsets.ModelViewSet):
    search_fields = ['email', 'password']
    filter_backends = (filters.SearchFilter,)
    queryset = JobSeeker.objects.all().order_by('id')
    serializer_class = JobSeekerSerializer

class JobPostViewSet(viewsets.ModelViewSet):
    queryset = JobPost.objects.all().order_by('company_name')
    serializer_class = JobPostSerializer

class JobsViewSet(viewsets.ModelViewSet):
    search_fields = ['company_name', 'job_position', 'type', 'company_id', 'lang_qualification']
    filter_backends = (filters.SearchFilter,)
    queryset = Jobs.objects.all().order_by('id')
    serializer_class = JobsSerializer
