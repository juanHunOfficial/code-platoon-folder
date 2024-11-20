from django.db import models
from to_do_app.models import Task

# Create your models here.
class Sub_Task(models.Model):
    sub_task_name = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    parent_task = models.ForeignKey(Task, on_delete=models.CASCADE, null=True)