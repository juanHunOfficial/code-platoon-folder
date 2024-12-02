from django.db import models
from django.core import validators as v
from tracker_app.models import Tracker
# Create your models here.
class Workout(models.Model):
    weekly_frequency = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1), v.MaxValueValidator(7)])
    tracker_name = models.ForeignKey(Tracker, on_delete=models.CASCADE, related_name='workout')
    