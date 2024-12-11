from django.urls import path
from .views import AllExercises

urlpatterns = [
    path('', AllExercises.as_view(), name='all_exercise'),
]
