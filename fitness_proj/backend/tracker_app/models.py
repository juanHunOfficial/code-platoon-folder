from django.db import models
from .validators import validate_tracker_name

class Tracker(models.Model):
    tracker_name = models.CharField(blank=False, validators=[validate_tracker_name])