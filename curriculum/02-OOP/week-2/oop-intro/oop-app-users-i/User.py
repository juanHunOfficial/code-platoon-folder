class User:
    
    def __init__(self, name: str, email: str, drivers_license: str = None) -> object:
        self.name = name
        self.email = email
        self.drivers_license = drivers_license
        