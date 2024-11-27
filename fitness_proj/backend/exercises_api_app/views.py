from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from requests_oauthlib import OAuth1
from fitness_proj.settings import env
from rest_framework.status import HTTP_404_NOT_FOUND
import pprint
# Create your views here.

class ExercisesAPI(APIView):
    
    
    def get(self, request, muscle):
        muscles = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves',
                   'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back',
                   'middle_back','neck', 'quadriceps', 'traps', 'triceps']
        if muscle in muscles:
            pass
        else:
            return Response({"error" : "Your search does not meet the selection"}, status=HTTP_404_NOT_FOUND)
        api_key = env.get("EXERCISE_API_KEY")
        endpoint = f"https://api.api-ninjas.com/v1/exercises?muscle={muscle}"
        headers = {
            'X-Api-Key' : api_key
        }
        response = requests.get(endpoint, headers=headers)
        # pp= pprint.PrettyPrinter(indent=3, depth=4)
        
        response_json = response.json()
        
        return Response({'exercises':response_json})