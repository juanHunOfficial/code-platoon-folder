from rest_framework import serializers
from .models import Subject

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['subject_name', 'professor', 'students']
        
    def get_students(self, obj):
        students = obj.students.all()
        ser_students = [{'id': student.id, 'name': student.name, 'student_email': student.student_email} for student in students]
        return ser_students