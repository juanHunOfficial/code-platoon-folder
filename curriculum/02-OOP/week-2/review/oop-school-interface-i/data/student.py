import csv
from .person import Person

class Student(Person):
    
    def __init__(self, name, age, role, school_id, password):
        super().__init__(name, age, role, school_id, password)
        
    @classmethod
    def show_student_body(cls) -> None:
        with open("data/students.csv", "r") as student_file:
            student_body = csv.DictReader(student_file)
            students = [cls(**student) for student in student_body]
            
            return students
        
    def __repr__(self):
       return f"Student: Name = {self.name}, Age = {self.age}, Role = {self.role}, School ID = {self.id}, Password = {self.password}\n"
    
    