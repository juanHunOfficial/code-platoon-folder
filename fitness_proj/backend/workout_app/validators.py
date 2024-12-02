from django.core.exceptions import ValidationError

def validate_valid_workout_type(type_of_workout):
    valid_types = ['legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders']
    
    if type_of_workout not in valid_types:
        raise ValidationError("Invalid type, enter one of the following options: 'legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders'.")
    