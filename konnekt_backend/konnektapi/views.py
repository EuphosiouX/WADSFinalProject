from rest_framework import viewsets, filters
from django.http import HttpResponse
from .serializers import JobSeekerSerializer, JobPostSerializer 
from .models import JobSeeker, JobPost
from rest_framework.decorators import api_view

# Create your views here.

class JobSeekerViewSet(viewsets.ModelViewSet):
    queryset = JobSeeker.objects.all().order_by('name')
    serializer_class = JobSeekerSerializer

    # @api_view(['POST'])
    # def post(self, request, *args, **kwargs):
    #     name = request.data['name']
    #     birth_date = request.data['birth_date']
    #     gender = request.data['gender']
    #     profile_image = request.data['profile_image']
    #     email = request.data['email']
    #     password = request.data['password']
    #     lang_preference = request.data['lang_preference']
    #     JobSeeker.objects.create(name=name, 
    #                             birth_date=birth_date, 
    #                             gender=gender, 
    #                             profile_image=profile_image,
    #                             email=email,
    #                             password=password,
    #                             lang_preference=lang_preference)
    #     return HttpResponse({'message': 'Job Seeker Created'})

class JobPostViewSet(viewsets.ModelViewSet):
    search_fields = ['job_position']
    filter_backends = (filters.SearchFilter,)
    queryset = JobPost.objects.all().order_by('company_name')
    serializer_class = JobPostSerializer
