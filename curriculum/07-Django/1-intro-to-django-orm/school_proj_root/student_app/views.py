from django.shortcuts import render
from .models import Student
from .serializers import StudentAllSerializer
from django.http import JsonResponse

# Create your views here.
def all_students(request):
    all_students_ser = StudentAllSerializer(Student.objects.order_by('name'), many=True)
    #JsonResponse requires a dict so the 'students' key is simply to put it in the format. it serves not real purpose otherwise
    return JsonResponse({'students': all_students_ser.data})