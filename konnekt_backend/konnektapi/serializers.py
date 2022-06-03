from rest_framework import serializers
from .models import JobSeeker, JobPost

class JobSeekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobSeeker
        fields = ('name', 'age', 'lang_preference')

class JobPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobPost
        fields = ('company_name', 'short_job_desc', 'lang_qualification')
