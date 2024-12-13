from django.core.exceptions import ValidationError
import re

def validate_valid_workout_type(type_of_workout):
    error_message = "Sorry the format you submitted was invalid. Please ensure you typed it in title format."
    
    regex = r'^[A-Za-z0-9]+(?:[\s][A-Za-z0-9]+)*$'
    
    if not re.match(regex, type_of_workout):
        raise ValidationError(error_message)
    
def validate_workout_name(workout_name):
    error_message = "Sorry the format you submitted was invalid. Please ensure you typed it in title format."
    
    regex = r'^[A-Za-z0-9]+(?:[\s][A-Za-z0-9]+)*$'
    
    if not re.match(regex, workout_name):
        raise ValidationError(error_message)