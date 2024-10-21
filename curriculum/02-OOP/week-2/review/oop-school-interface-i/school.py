from data.student import Student
from data.staff import Staff

class School:
    
    def __init__(self, name:str) -> object:
        self.name = name
        self.staff = Staff.show_staff_team()
        self.students = Student.show_student_body()
        
    def delete_student(self, id_to_delete):
        for student in enumerate(self.students):
            if student.id == id_to_delete:
                self.students.remove(student)
                
    def view_student(self, id_to_see):
        for student in self.students:
            if student.id == id_to_see:
                print("entered if", student)
                print(self.students)
                
    def add_student(self):
        name = input("Input student name:  ") 
        age = input("Input student age:  ")
        role = input("Input student role:  ")
        school_id = School.capture_id(self)
        password = input("Input student password:  ")
        self.students.append(Student(name, age, role, school_id, password))
        
    def capture_id(self):
            id_list = [int(x.id) for x in self.students]
            new_id = max(id_list) + 1
            return str(new_id)
