from django.shortcuts import render, get_object_or_404
from .models import Subject
from .serializers import SubjectSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class All_subjects(APIView):
    
    def get(self, request):
        all_subjects_ser = SubjectSerializer(Subject.objects.all(), many=True)
        
        return Response(all_subjects_ser.data)

class A_subject(APIView):
    
    def get(self, request, subject):
        a_subject_ser = get_object_or_404(Subject, subject_name = subject.title())
        return Response(SubjectSerializer(a_subject_ser).data)