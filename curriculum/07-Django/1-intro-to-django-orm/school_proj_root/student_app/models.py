from django.db import models
from django.core import validators as v
from .validators import validate_name_format, validate_school_email, validate_combination_format

# Create your models here.
class Student(models.Model):
    name = models.CharField(default=None, unique=False, max_length=255, null=False, validators=[validate_name_format])
    student_email = models.EmailField(default=None, unique=True, max_length=255, null=False, validators=[validate_school_email])
    personal_email = models.EmailField(default=None, unique=True, max_length=255)
    locker_number = models.IntegerField(default=110, unique=True, null=False, validators=[v.MinValueValidator(1), v.MaxValueValidator(200)])
    locker_combination = models.CharField(default="12-12-12", unique=False, max_length=50, null=False, validators=[validate_combination_format])
    good_student = models.BooleanField(default=True, unique=False, null=False) 
    subjects = models.ManyToManyField(default=None, unique=False, validators=[], related_name='students')
    
    def __str__(self):
        return f"{self.name} - {self.student_email} - {self.locker_number}"
    
    def locker_reassignment(self, new_locker: int) -> None:
        self.locker_number = new_locker
        self.save()
        
    def student_status(self, new_status: bool) -> None:
        self.good_student = new_status
        self.save()
        
    def add_subject_method(self, )
    