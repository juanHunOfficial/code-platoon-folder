from django.db import models

# Create your models here.
class Car(models.Model):
    make = models.CharField(default=None, blank=False, max_length=255)
    model = models.CharField(default=None, blank=False, max_length=255)
    mileage = models.BigIntegerField(default=None, blank=False)
    year = models.IntegerField(default=None, blank=False)