from rest_framework import viewsets
from .serializers import JobSeekerSerializer, JobPostSerializer
from .models import JobSeeker, JobPost

# Create your views here.

class JobSeekerViewSet(viewsets.ModelViewSet):
    queryset = JobSeeker.objects.all().order_by('name')
    serializer_class = JobSeekerSerializer

class JobPostViewSet(viewsets.ModelViewSet):
    queryset = JobPost.objects.all().order_by('company_name')
    serializer_class = JobPostSerializer
