from django.shortcuts import render
from .models import List
from .serializer import ListSerializer
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
        
        new_list = ListSerializer(data=body_data)
        if new_list.is_valid():
            new_list.save()
            return Response(new_list.data, status=HTTP_201_CREATED)
        return Response(new_list.errors, status=HTTP_400_BAD_REQUEST)
    
class A_list(APIView):
    def get(self, request, requested_list):
        
        if type(requested_list) == str:
            list_name = List.objects.get(list_name=requested_list)
            return Response(ListSerializer(list_name).data)
        
            