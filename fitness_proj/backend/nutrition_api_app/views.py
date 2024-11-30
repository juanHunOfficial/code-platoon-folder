from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from fitness_proj.settings import env
from rest_framework.status import HTTP_404_NOT_FOUND
import pprint

# Create your views here.
class NutritionAPI(APIView):
    
    def get(self, request, meal):
        api_key = env.get("EXERCISE_API_KEY")
        endpoint = 'https://api.api-ninjas.com/v1/nutrition?query={}'.format(meal)
        headers = {
            'X-Api-Key' : api_key
        }
        response = requests.get(endpoint, headers=headers)
        # pp= pprint.PrettyPrinter(indent=3, depth=4)
        
        response_json = response.json()
        
        return Response({'exercises':response_json})