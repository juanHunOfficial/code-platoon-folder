from django.shortcuts import render
from .models import Task
from .serializers import TaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class All_tasks(APIView):
    def get(self, request):
        tasks = TaskSerializer(Task.objects.all(), many=True)
        return Response(tasks.data)
    
class A_task(APIView):
    def get(self, request, task_name):
        
        if type(task_name) == str:
            task_name = Task.objects.get(task_name=task_name)
            return Response(TaskSerializer(task_name).data)