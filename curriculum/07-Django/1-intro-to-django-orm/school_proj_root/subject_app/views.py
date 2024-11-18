from django.shortcuts import render
from .models import Subject
from .serializers import SubjectSerializer
from django.http import JsonResponse

# Create your views here.
def all_subjects(request):
    all_subjects_ser = SubjectSerializer(Subject.objects.order_by('subject_name'), many=True)
    
    return JsonResponse({'subjects': all_subjects_ser.data})