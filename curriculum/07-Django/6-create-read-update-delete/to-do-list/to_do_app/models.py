from django.db import models
from django.core import validators as v
from list_app.models import List

# Create your models here.
class Task(models.Model):
    task_name = models.CharField(max_length=150, blank=False)
    completed = models.BooleanField(default=False)
    parent_list = models.ForeignKey(List, on_delete=models.CASCADE, null=True)