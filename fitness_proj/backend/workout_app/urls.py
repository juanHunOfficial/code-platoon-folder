from django.urls import path
from .views import AllWorkouts, SingleWorkout

urlpatterns = [
    path('', AllWorkouts.as_view(), name='all_workout'),
    path('<int:workout_id>/', SingleWorkout.as_view(), name='single_workout'),
]
