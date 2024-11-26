from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from requests_oauthlib import OAuth1
from fitness_proj.settings import env
import pprint
# Create your views here.

class ExercisesAPI(APIView):
    
    
    def get(self, request, exercise):
        auth = OAuth1(env.get("EXERCISE_API_KEY"))
        endpoint = f"https://api.api-ninjas.com/v1/exercises?muscle={exercise}"
        
        response = requests.get(endpoint, auth=auth)
        # pp= pprint.PrettyPrinter(indent=3, depth=4)
        
        response_json = response.json()
        
        return Response({'name':response_json["name"], 'type':response_json["type"], 
                        "equipment":response_json["equipment"], "difficulty":response_json["difficulty"], 
                        "instructions":response_json['instructions']})