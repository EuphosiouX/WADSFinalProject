from rest_framework import serializers
from .models import JobSeeker, JobPost, Jobs

class JobSeekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobSeeker
        fields = ('id', 'name', 'birth_date', 'gender', 'image', 'email', 'password', 'desc', 'lang_preference')

class JobPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobPost
        fields = ('id', 'company_name', 'address', 'phone_no', 'email', 'password')

class JobsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Jobs
        fields = ('id', 'company_name', 'address', 'phone_no', 'email', 'job_position', 'type', 'desc', 'lang_qualification', 'company_id')