from django.db import models

# Create your models here.
class Student(models.Model):
    name =  models.CharField(max_length=255, null=False)
    student_email = models.EmailField(max_length=255, null=False)
    personal_email = models.EmailField(max_length=255)
    lock_number = models.IntegerField(null=False)
    locker_combination = models.CharField(max_length=50, null=False)
    good_student = models.BooleanField(null=False)
    
    