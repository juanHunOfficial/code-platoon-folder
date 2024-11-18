from django.shortcuts import render
from .models import Student
from .serializers import StudentAllSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class All_students(APIView):
    
    def get(self, request):
        all_students_ser = StudentAllSerializer(Student.objects.order_by('name'), many=True)
        #JsonResponse requires a dict so the 'students' key is simply to put it in the format. it serves not real purpose otherwise
        return Response( all_students_ser.data)