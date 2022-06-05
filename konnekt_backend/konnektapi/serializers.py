from rest_framework import serializers
from .models import JobSeeker, JobPost

class JobSeekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobSeeker
        fields = ('name', 'birth_date', 'gender', 'profile_image', 'email', 'password', 'lang_preference')

class JobPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobPost
        fields = ('pub_date', 'company_name', 'job_position', 'lang_qualification')
