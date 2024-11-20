from django.shortcuts import render
from .models import Sub_Task
from .serializers import SubTaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class All_subtasks(APIView):
    def get(self, request):
        sub_tasks = SubTaskSerializer(Sub_Task.objects.all(), many=True)
        return Response(sub_tasks.data)
    
class a_sub_task(APIView):
    def get(self, request, sub_task_name):
        
        if type(sub_task_name) == str:
            sub_task = Sub_Task.objects.get(sub_task_name=sub_task_name)
            return Response(SubTaskSerializer(sub_task).data)