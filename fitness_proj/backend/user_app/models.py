from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core import validators as v
from .validators import validate_password, validate_firstname
# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True, verbose_name='email address')
    password = models.CharField(max_length=128, validators=[validate_password, v.MinLengthValidator(8)])
    age = models.PositiveIntegerField(validators=[v.MinValueValidator(18), v.MaxValueValidator(125)], blank=False)
    firstname = models.CharField(max_length=50, validators=[validate_firstname], blank=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['age', 'firstname']

