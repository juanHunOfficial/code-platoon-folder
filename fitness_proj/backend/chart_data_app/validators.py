from django.core.exceptions import ValidationError
import re

def validate_valid_type(type):
    valid_types = ['legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders']
    
    if type not in valid_types:
        raise ValidationError("Invalid type, enter one of the following options: 'legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders'.")
    