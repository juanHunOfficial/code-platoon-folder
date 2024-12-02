from django.core.exceptions import ValidationError

def validate_valid_type(type):
    valid_types = ['legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders']
    
    if type not in valid_types:
        raise ValidationError("Invalid type, enter one of the following options: 'legs', 'arms', 'chest', 'back', 'abs', 'push', 'pull', 'shoulders'.")
    
def validate_exercise_name(exercise_name):
    error_message = "Sorry the format you submitted was invalid. Please ensure you typed it in title format."
    
    regex = r'^[A-Za-z0-9]+(?:[\s][A-Za-z0-9]+)*$'
    
    if not re.match(regex, exercise_name):
        raise ValidationError(error_message)