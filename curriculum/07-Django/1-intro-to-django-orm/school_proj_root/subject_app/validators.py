from django.core.exceptions import ValidationError
import re

def validate_subject_format(subject):
    error_m = 'Subject must be in title case format.'
    
    regex = r"^[A-Z][a-z]*(\s[A-Z][a-z]*)*$"

    valid_combination = re.match(regex, subject)
    
    if valid_combination: 
        return subject
    else:
        raise ValidationError(error_m, params={'subject' : subject})
    
    

def validate_professor_name(professor):
    error_m = 'Professor name must be in the format "Professor Adam".'
    
    regex = r"^[A-Za-z]+\.?\s[A-Z][a-z]+$"
    
    valid_combination = re.match(regex, professor)
    
    if valid_combination:
        return professor
    else:
        raise ValidationError(error_m, params={'professor' : professor})