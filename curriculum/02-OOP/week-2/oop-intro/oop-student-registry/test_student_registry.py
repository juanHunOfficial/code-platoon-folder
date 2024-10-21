import pytest
from student_registry import Student

def test_student_initialization():
    student = Student("Alice")
    assert student.name == "Alice"
    assert student.age 
    assert student.grade == "12th"

def test_student_name_setter():
    student = Student("Alice")
    student.name = "Alex"
    assert student.name == "Alex"

def test_student_age_setter():
    student = Student("Alice")
    student.age = 14
    assert student.age == 14

def test_student_grade_setter():
    student = Student("Alice")
    student.grade = "10th"
    assert student.grade == "10th"

def test_invalid_name_setter():
    student = Student("Alice")
    student.name = 123
    assert student.name == "Alice"

def test_invalid_age_setter():
    student = Student("Alice")
    student.age = "invalid"
    assert student.age == 13

def test_invalid_grade_setter():
    student = Student("Alice")
    student.grade = "13th"
    assert student.grade == "12th"

# Write tests for Class methods
