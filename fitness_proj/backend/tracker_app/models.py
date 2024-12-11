from django.db import models
from .validators import validate_tracker_name
from user_app.models import User

class Tracker(models.Model):
    tracker_name = models.CharField(blank=False, validators=[validate_tracker_name])
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    