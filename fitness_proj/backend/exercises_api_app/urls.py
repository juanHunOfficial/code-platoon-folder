from django.urls import path
from .views import ExercisesAPI

urlpatterns = [
    path('<str:exercise>/', ExercisesAPI.as_view(), name="exercise_api"),
]
