from django.shortcuts import render, get_object_or_404
from .models import Workout
from .serializers import WorkoutSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT

# Create your views here.

class AllWorkouts(APIView):
    
    def get(self, request):
        ser_workouts = WorkoutSerializer(Workout.objects.all(), many=True)
        return Response(ser_workouts.data)
    
    def post(self, request):
        data = request.data.copy()
        
        new_workout = WorkoutSerializer(data=data)
        if new_workout.is_valid():
            new_workout.save()
            return Response(new_workout.data, status=HTTP_201_CREATED)
        return Response(new_workout.errors, status=HTTP_400_BAD_REQUEST)