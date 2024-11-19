from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from requests_oauthlib import OAuth1
import requests
from map_doc_proj.settings import env

# Create your views here.
class Search_Project(APIView):
    
    def get(self, request, search_text="miami"):
        
        ACCESS_TOKEN = env.get('MAP_DOC_PB_TOKEN')
       
        # endpoint = f'https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json?access_token={ACCESS_TOKEN}'
        endpoint = f'https://api.mapbox.com/search/searchbox/v1/forward?q={search_text}&access_token={ACCESS_TOKEN}'
        
        response = requests.get(endpoint)
        
        responseJSON = response.json()
        return Response(responseJSON)