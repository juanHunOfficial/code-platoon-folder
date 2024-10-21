class Person:
    
    def __init__(self, name:str, age:int, role:str, id:int, password:str = "") -> object:
        self.name = name
        self.age = age
        self.role = role
        self.id = id
        if password == "":
            self.password = input("Enter what you would like your password to be:  ")
        else:
            self.password = password