from django.shortcuts import render
from .models import List
from .serializer import ListSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class All_lists(APIView):
    def get(self, request):
        lists = ListSerializer(List.objects.all(), many=True)
        return Response(lists.data)
    
class A_list(APIView):
    def get(self, request, requested_list):
        
        if type(requested_list) == str:
            list_name = List.objects.get(list_name=requested_list)
            return Response(ListSerializer(list_name).data)
        
            