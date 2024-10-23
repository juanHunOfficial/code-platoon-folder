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
    
class Enrollments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer)
    class_id = db.Column(db.Integer)
    grade = db.Column(db.String(1))
    
class Addresses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    line_1 = db.Column(db.String(50))
    city = db.Column(db.String(25))
    state = db.Column(db.String(25))
    zipcode = db.Column(db.String(5))

@app.route("/enrollments", methods=["GET"])
def get_enrollments():
    enrollments = Enrollments.query.all()
    formatted_enrollments = [{
        "id": enroll.id,
        "student_id": enroll.student_id,
        "class_id": enroll.class_id,
        "grade": enroll.grade        
    } for enroll in enrollments ]
    return jsonify(formatted_enrollments)
    
@app.route("/addresses", methods=["GET"])
def get_addresses():
    addresses = Addresses.query.all()
    formatted_addresses = [{
        "id": address.id,
        "line_1": address.line_1,
        "city": address.city,
        "state": address.state,
        "zipcode": address.zipcode
    }for address in addresses]
    
    return jsonify(formatted_addresses)
    
@app.route("/classes", methods=["GET"])
def get_classes():
    classes = Classes.query.all()
    formatted_classes = [{
        "id": clss.id,
        "name": clss.name,
        "credits": clss.credits
    }for clss in classes]
    return jsonify(formatted_classes)
    
# def __repr__(self):
#     return self.first_name

@app.route("/students", methods=["GET"])  # GET PUT POST DELETE
def get_students():
    students = Students.query.all()  # SELECT * FROM student;
    formatted_students = [{
        "id": stud.id,
        "first_name": stud.first_name,
        "last_name": stud.last_name,
        "birthdate": stud.birthdate,
        "address_id": stud.address_id
    }for stud in students]
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