from django.db import models

# Create your models here.
class JobSeeker(models.Model):
    name = models.CharField(max_length=60)
    age = models.CharField(max_length=60)
    lang_preference = models.CharField(max_length=60)

    def __str__(self):
        return self.name, self.age, self.lang_preference

class JobPost(models.Model): 
    name = models.CharField(max_length=60)
    age = models.CharField(max_length=60)
    lang_qualification = models.CharField(max_length=60)

    def __str(self):
        return self.name, self.age, self.lang_qualification
