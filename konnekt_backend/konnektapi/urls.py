from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'jobseeker', views.JobSeekerViewSet)
router.register(r'jobpost', views.JobPostViewSet)

urlpatterns = [
    path('', include(router.urls))
]
