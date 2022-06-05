from django.db import models

# Create your models here.
class JobSeeker(models.Model):
    name = models.CharField(max_length=60)
    age = models.CharField(max_length=60)
    lang_preference = models.CharField(max_length=60)

    def __str__(self):
        return self.name, self.age, self.lang_preference

class JobPost(models.Model): 
    pub_date = models.DateTimeField('published', null=True)
    company_name = models.CharField(max_length=60)
    job_position = models.CharField(max_length=60)
    lang_qualification = models.CharField(max_length=60) 

    def __str__(self):
        return self.pub_date, company_name, self.job_position, self.lang_qualification
