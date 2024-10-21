from school import School 

school = School('Ridgemont High') 

def display_menu() -> int:
    response = int(input(f"""
What would you like to do?
Options:
    1. List All Students
    2. View Individual Student <student_id>
    3. Add a Student
    4. Remove a Student <student_id>
    5. Quit
"""))
    return response


while(True):
    current_input_int = display_menu()
    if current_input_int == 1:
        print(school.students)
    elif current_input_int == 2:
        school.view_student(input("What is the id of the student you want to look at:  "))
    elif current_input_int == 3:
        school.add_student()
    elif current_input_int == 4:
        school.delete_student(input("What is the id of the student you want to delete:  "))
    elif current_input_int == 5:
        break