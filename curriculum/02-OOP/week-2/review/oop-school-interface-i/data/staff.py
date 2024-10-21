import csv
from .person import Person

class Staff(Person):
    
    def __init__(self, name, age, role, employee_id, password):
        super().__init__(name, age, role, employee_id, password)
        
    @classmethod
    def show_staff_team(cls) -> list:
        with open("data/staff.csv", "r") as staff_file:
            staff_members = csv.DictReader(staff_file)
            staff = [cls(**member) for member in staff_members]
            
            return staff