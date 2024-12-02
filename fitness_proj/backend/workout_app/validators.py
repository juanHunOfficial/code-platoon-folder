from django.core.exceptions import ValidationError

def validate_valid_workout_type(type_of_workout):
    valid_types = ['legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders']
    
    if type_of_workout not in valid_types:
        raise ValidationError("Invalid type, enter one of the following options: 'legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders'.")
    
def validate_workout_name(workout_name):
    error_message = "Sorry the format you submitted was invalid. Please ensure you typed it in title format."
    
    regex = r'^[A-Za-z0-9]+(?:[\s][A-Za-z0-9]+)*$'
    
    if not re.match(regex, workout_name):
        raise ValidationError(error_message)