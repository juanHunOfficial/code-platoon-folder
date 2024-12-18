from django.db import models
from django.core import validators as v
from exercise_app.models import Exercise

# Create your models here.
class ChartData(models.Model):
    actual_num_of_sets = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    actual_num_of_reps = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    goal_num_of_sets = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    goal_num_of_reps = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    weight = models.PositiveIntegerField(blank=False, validators=[v.MaxValueValidator(2000)])
    exercise_id = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name='charts')
    