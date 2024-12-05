from django.db import models
from workout_app.models import Workout
from django.core import validators as v
from .validators import validate_valid_type, validate_exercise_name
# Create your models here.
class Exercise(models.Model):
    exercise_name = models.CharField(blank=False, validators=[validate_exercise_name])
    actual_num_of_sets = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    actual_num_of_reps = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    type = models.CharField(blank=False, validators=[validate_valid_type])
    goal_num_of_sets = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    goal_num_of_reps = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    workout_id = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='workout_id')