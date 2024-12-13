from django.db import models
from workout_app.models import Workout
from django.core import validators as v
from .validators import  validate_exercise_name
# Create your models here.
class Exercise(models.Model):
    exercise_name = models.CharField(blank=False, validators=[validate_exercise_name])
    workout_id = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='exercises')
    