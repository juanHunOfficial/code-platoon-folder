from flask import Flask, jsonify

app = Flask(__name__)

students = [
     {'id': '1', 'first_name': 'John', 'last_name': 'Doe', 'age': 18, 'grade': 'A'},
     {'id': '2', 'first_name': 'Jane', 'last_name': 'Smith', 'age': 19, 'grade': 'B'},
     {'id': '3', 'first_name': 'Bob', 'last_name': 'Johnson', 'age': 20, 'grade': 'C'},
     {'id': '4', 'first_name': 'Emily', 'last_name': 'Williams', 'age': 18, 'grade': 'A'},
     {'id': '5', 'first_name': 'Michael', 'last_name': 'Brown', 'age': 19, 'grade': 'B'},
     {'id': '6', 'first_name': 'Samantha', 'last_name': 'Davis', 'age': 22, 'grade': 'A'},
     {'id': '7', 'first_name': 'Oliver', 'last_name': 'Jones', 'age': 20, 'grade': 'B'},
     {'id': '8', 'first_name': 'Sophia', 'last_name': 'Miller', 'age': 21, 'grade': 'A'},
     {'id': '9', 'first_name': 'Ethan', 'last_name': 'Wilson', 'age': 19, 'grade': 'C'},
     {'id': '10', 'first_name': 'Isabella', 'last_name': 'Moore', 'age': 22, 'grade': 'B'}
 ]

@app.route("/students", methods=["GET"])
def get_students():
    return jsonify(students)

@app.route("/old_students/", methods=["GET"])
def get_old_students():
    old_students = list(filter(lambda student: student["age"] >= 20, students))
    return jsonify(old_students)

@app.route("/young_students/", methods=["GET"])
def get_young_students():
    young_students = list(filter(lambda student: student["age"] < 21, students))
    return jsonify(young_students)

@app.route("/advance_students/", methods=["GET"])
def get_advanced_students():
    advanced_students = list(filter(lambda student: student["age"] < 21 and student["grade"] == "A", students))
    return jsonify(advanced_students)

@app.route("/student_names/", methods=["GET"])
def get_student_names():
    student_names = list(map(lambda student: f"{student["first_name"]} {student["last_name"]}", students))
    return jsonify(student_names)

@app.route("/student_ages/", methods=["GET"])
def get_student_ages():
    student_ages = list(map(lambda student: f"{student["first_name"]} {student["age"]}", students))
    return jsonify(student_ages)
if __name__ == "__main__":
    app.run(debug=True, port=8000)