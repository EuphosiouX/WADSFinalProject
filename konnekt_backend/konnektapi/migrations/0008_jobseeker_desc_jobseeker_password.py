# Generated by Django 4.0.5 on 2022-06-07 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('konnektapi', '0007_remove_jobseeker_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobseeker',
            name='desc',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='jobseeker',
            name='password',
            field=models.CharField(max_length=60, null=True),
        ),
    ]