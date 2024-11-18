from django.shortcuts import render
from .models import Subject
from .serializers import SubjectSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class All_subjects(APIView):
    
    def get(self, request):
        all_subjects_ser = SubjectSerializer(Subject.objects.order_by('subject_name'), many=True)
        
        return Response(all_subjects_ser.data)