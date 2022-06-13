from django.db import models

# def pathTo(instance, fileName):
#     return '/'.join(['profile-images', str(instance.name), fileName])

# Create your models here.
class JobSeeker(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, verbose_name='ID') 
    name = models.CharField(null=True, max_length=60)
    birth_date = models.DateField(null=True)
    gender = models.CharField(null=True, max_length=60)
    image = models.URLField(null=True, blank=True, max_length=250)
    email = models.CharField(null=True, max_length=60)
    password = models.CharField(null=True, max_length=60)
    desc = models.TextField(null=True)
    # age = models.CharField(max_length=60)
    lang_preference = models.CharField(null=True, max_length=60)


    def __str__(self):
        return self.id, self.name, self.birth_date, self.gender, self.image, self.email, self.password, self.desc, self.lang_preference

class JobPost(models.Model): 
    id = models.BigAutoField(auto_created=True, primary_key=True, verbose_name='ID') 
    company_name = models.CharField(null=True, max_length=60)
    address = models.TextField(null=True)
    phone_no = models.CharField(null=True, max_length=60)
    email = models.CharField(null=True, max_length=60)
    password = models.CharField(null=True, max_length=60)

    def __str__(self):
        return self.id, self.company_name, self.address, self.phone_no, self.email, self.password

class Jobs(models.Model):
    id = models.BigAutoField(auto_created=True, primary_key=True, verbose_name='ID')
    company_name = models.CharField(null=True, max_length=60)
    address = models.TextField(null=True)
    phone_no = models.CharField(null=True, max_length=60)
    email = models.CharField(null=True, max_length=60)
    job_position = models.CharField(null=True, max_length=60)
    type = models.CharField(null=True, max_length=60)
    desc = models.TextField(null=True)
    lang_qualification = models.CharField(null=True, max_length=60)
    company_id = models.IntegerField(null=True)

    def __str__(self):
        return self.id, self.company_name, self.address, self.phone_no, self.email, self.job_position, self.type, self.desc, self.lang_qualification, self.company_id