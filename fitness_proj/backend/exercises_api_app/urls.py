from django.urls import path
from .views import ExercisesAPI

urlpatterns = [
    path('<str:muscle>/', ExercisesAPI.as_view(), name="exercise_api_muscle_search"),
]
