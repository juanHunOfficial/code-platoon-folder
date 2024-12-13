from django.db import models
from django.core import validators as v
from .validators import validate_valid_type
import datetime
from exercise_app.models import Exercise

# Create your models here.
class ChartData(models.Model):
    iteration = models.PositiveIntegerField(blank=False)
    actual_num_of_sets = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    actual_num_of_reps = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    type = models.CharField(blank=False, validators=[validate_valid_type])
    goal_num_of_sets = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    goal_num_of_reps = models.PositiveIntegerField(blank=False, validators=[v.MinValueValidator(1)])
    weight = models.PositiveIntegerField(blank=False, validators=[v.MaxValueValidator(2000)])
    date = models.DateField(default=datetime.date.today)
    exercise_id = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name='chart_data')