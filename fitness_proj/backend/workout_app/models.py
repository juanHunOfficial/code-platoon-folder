from django.db import models
from django.core import validators as v
from tracker_app.models import Tracker
from .validators import validate_valid_workout_type
# Create your models here.
class Workout(models.Model):
    weekly_frequency = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1), v.MaxValueValidator(7)])
    type_of_workout = models.CharField(blank=False, validators=[validate_valid_workout_type])
    tracker_name = models.ForeignKey(Tracker, on_delete=models.CASCADE, related_name='workout')
    