from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
#Configuration for PostgreSQL database   postgresql://username@localhost/db_name
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://juanhun@localhost/school"

#Initialize the SQLAlchemy extension
db = SQLAlchemy(app)
#class Name of table(db.Model)
class Students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    birthdate = db.Column(db.String(15))
    address_id = db.Column(db.String(1))
    
class Classes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    credits = db.Column(db.Integer)
    
@app.route("/classes", methods=["GET"])
def get_classes():
    classes = Classes.query.all()
    formatted_classes = []
    for clss in classes:
        formatted_classes.append(
            {
                "id": clss.id,
                "name": clss.name,
                "credits": clss.credits
            }
        )
    return jsonify(formatted_classes)
    
    def __repr__(self):
        return self.first_name

@app.route("/students", methods=["GET"])  # GET PUT POST DELETE
def get_students():
    students = Students.query.all()  # SELECT * FROM student;
    formatted_students = []
    for stud in students:
        formatted_students.append(
            {
                "id": stud.id,
                "first_name": stud.first_name,
                "last_name": stud.last_name,
                "birthdate": stud.birthdate,
                "address_id": stud.address_id
            }
        )
    return jsonify(formatted_students)


# @app.route("/students/", methods=["GET"])
# def get_students():
#     return jsonify(students)

# @app.route("/old_students/", methods=["GET"])
# def get_old_students():
#     old_students = list(filter(lambda student: student["age"] >= 20, students))
#     return jsonify(old_students)

# @app.route("/young_students/", methods=["GET"])
# def get_young_students():
#     young_students = list(filter(lambda student: student["age"] < 21, students))
#     return jsonify(young_students)

# @app.route("/advance_students/", methods=["GET"])
# def get_advanced_students():
#     advanced_students = list(filter(lambda student: student["age"] < 21 and student["grade"] == "A", students))
#     return jsonify(advanced_students)

# @app.route("/student_names/", methods=["GET"])
# def get_student_names():
#     student_names = list(map(lambda student: f"{student["first_name"]} {student["last_name"]}", students))
#     return jsonify(student_names)

# @app.route("/student_ages/", methods=["GET"])
# def get_student_ages():
#     student_ages = list(map(lambda student: f"{student["first_name"]} {student["age"]}", students))
#     return jsonify(student_ages)
#--------------------------------------------------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True, port=8000)