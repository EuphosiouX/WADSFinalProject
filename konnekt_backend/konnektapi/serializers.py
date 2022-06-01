from rest_framework import serializers
from .models import JobSeeker

class JobSeekerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobSeeker
        fields = ('name', 'age')
