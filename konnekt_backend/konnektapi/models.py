from django.db import models

def pathTo(instance, fileName):
    return '/'.join(['profile-images', str(instance.name), fileName])

# Create your models here.
class JobSeeker(models.Model):
    name = models.CharField(max_length=60)
    birth_date = models.DateField(null=True)
    gender = models.CharField(max_length=60)
    image = models.ImageField(blank=True, null=True, upload_to=pathTo)
    email = models.CharField(max_length=60)
    # password = models.CharField(max_length=60)
    # age = models.CharField(max_length=60)
    lang_preference = models.CharField(max_length=60, null=True)


    def __str__(self):
        return self.name, self.birth_date, self.gender, self.image, self.email, self.lang_preference

class JobPost(models.Model): 
    pub_date = models.DateTimeField('published', null=True)
    company_name = models.CharField(max_length=60)
    job_position = models.CharField(max_length=60)
    lang_qualification = models.CharField(max_length=60) 

    def __str__(self):
        return self.pub_date, self.company_name, self.job_position, self.lang_qualification
