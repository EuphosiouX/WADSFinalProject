from rest_framework import viewsets, filters
from .serializers import JobSeekerSerializer, JobPostSerializer 
from .models import JobSeeker, JobPost

# Create your views here.

class JobSeekerViewSet(viewsets.ModelViewSet):
    queryset = JobSeeker.objects.all().order_by('name')
    serializer_class = JobSeekerSerializer

class JobPostViewSet(viewsets.ModelViewSet):
    search_fields = ['job_position']
    filter_backends = (filters.SearchFilter,)
    queryset = JobPost.objects.all().order_by('company_name')
    serializer_class = JobPostSerializer
