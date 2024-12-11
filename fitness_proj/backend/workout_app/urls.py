from django.urls import path
from .views import AllWorkouts

urlpatterns = [
    path('', AllWorkouts.as_view(), name='all_workout'),
]
