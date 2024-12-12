from django.urls import path
from .views import AllExercises, SingleExercise

urlpatterns = [
    path('', AllExercises.as_view(), name='all_exercise'),
    path('<int_or_str:exercise>/', SingleExercise.as_view(), name='single_exercise'),
]
