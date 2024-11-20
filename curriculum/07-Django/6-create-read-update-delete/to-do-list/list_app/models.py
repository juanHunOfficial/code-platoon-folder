from django.db import models

# Create your models here.
class List(models.Model):
    list_name = models.CharField(max_length=255)