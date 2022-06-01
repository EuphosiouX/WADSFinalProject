from rest_framework import viewsets
from .serializers import JobSeekerSerializer
from .models import JobSeeker

# Create your views here.

class JobSeekerViewSet(viewsets.ModelViewSet):
    queryset = JobSeeker.objects.all().order_by('name')
    serializer_class = JobSeekerSerializer
