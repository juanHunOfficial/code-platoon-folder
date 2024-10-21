import string

def caesar_cipher(string_to_encrypt: str, shift_amount: int) -> str:
    all_alpha = list(string.ascii_lowercase) + list(string.ascii_uppercase) 
    
    NUMBER_OF_LETTERS_IN_ALPHABET = 26
    
    encrypted_message = ""
    
    for char in string_to_encrypt:
        
        if char.isalpha():
            index = all_alpha.index(char)
            new_char = (index + shift_amount) % NUMBER_OF_LETTERS_IN_ALPHABET
            
            if char.isupper():
                encrypted_message += all_alpha[new_char].upper()
            else:
                encrypted_message += all_alpha[new_char]
                
        else:
            encrypted_message += char
            
    return encrypted_message