from django.shortcuts import render, get_object_or_404
from .models import List
from .serializer import ListSerializer
from to_do_app.models import Task
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT

# Create your views here.

class All_lists(APIView):
    
    
    def get(self, request):
        lists = ListSerializer(List.objects.all(), many=True)
        return Response(lists.data)
    
    def post(self, request):
        body_data = request.data.copy()
        #                          partial = this is required since tasks will be empty
        new_list = ListSerializer(data=body_data, partial=True)
        if new_list.is_valid():
            new_list.save()
            return Response(new_list.data, status=HTTP_201_CREATED)
        return Response(new_list.errors, status=HTTP_400_BAD_REQUEST)
    
class A_list(APIView):
    
    def get_list_obj(self, list_name):
        if type(list_name) == int:
            list_name = get_object_or_404(List, id=list_name)
        else:
            list_name = get_object_or_404(List, list_name=list_name)
        return list_name
    
    def create_or_update_tasks(self, list_obj, list_of_tasks):
        for task_name in list_of_tasks:
            if list_obj.get(Task, task_name=task_name):
                list_obj.tasks.add(task_name)
                list_obj.save()
    
    
    
    def get(self, request, requested_list):
        
        list_name = self.get_list_obj(requested_list)
        list_ser = ListSerializer(list_name)
        return Response(list_ser.data)
        
    def put(self, request, list_name):
        body_data = request.data.copy()
        
        
        list_obj = self.get_list_obj(list_name)
        
        list_of_tasks = body_data.get('tasks')
        
        updated_list = ListSerializer(list_obj, data=body_data, partial=True)
        
        if updated_list.is_valid():
            if list_of_tasks is not None:
                self.create_or_update_tasks(list_obj, list_of_tasks)
            updated_list.save()
            return Response(updated_list.data, status=HTTP_204_NO_CONTENT)
        return Response(updated_list.errors, status=HTTP_400_BAD_REQUEST)
        
            