from django.core.exceptions import ValidationError
import re

def validate_password(password):
    error_message = "Password must be at least 8 characters long, contain at least one letter, one number, and one special character (@, $, !, %, *, ?, &)."
    
    regex = r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    
    if not re.match(regex, password):
        raise ValidationError(error_message)
    
def validate_firstname(firstname):
    error_message = "Your first name must be capitalized and only contain letters."
    
    regex = r'^[A-Za-zÀ-ÿ-]+(?: [A-Za-zÀ-ÿ-]+)*$'
    
    if not re.match(regex, firstname):
        raise ValidationError(error_message)