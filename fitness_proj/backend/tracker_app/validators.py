from django.core.exceptions import ValidationError
import re

def validate_tracker_name(tracker_name):
    error_message = "Sorry the format you submitted was invalid. Please ensure you typed it in title format."
    
    regex = r'^[A-Za-z0-9]+(?:[\s][A-Za-z0-9]+)*$'
    
    if not re.match(regex, tracker_name):
        raise ValidationError(error_message)