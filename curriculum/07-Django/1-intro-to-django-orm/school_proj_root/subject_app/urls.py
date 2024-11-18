from django.urls import path
from .views import all_subjects

urlpatterns = [
    path('', all_subjects, name='all_subjects'),
]