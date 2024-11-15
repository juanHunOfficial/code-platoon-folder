from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['name', 'student_email', 'locker_number']
        
class StudentAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['name', 'student_email', 'personal_email', 'locker_number', 'locker_combination', 'good_student', 'subjects']
        
        def get_subjects(self, obj):
            subjects = obj.subjects.all()
            ser_subjects = [{'id': subject.id, 'subject_name': subject.subject_name, 'professor': subject.professor} for subject in subjects]
            return ser_subjects