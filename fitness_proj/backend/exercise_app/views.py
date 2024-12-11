from django.shortcuts import render, get_object_or_404
from .models import Exercise
from .serializers import ExerciseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT

# Create your views here.
class AllExercises(APIView):
    
    def get(self, request):
        ser_workouts = ExerciseSerializer(Exercise.objects.all(), many=True)
        return Response(ser_workouts.data)
    
    def post(self, request):
        data = request.data.copy()
        
        new_exercise = ExerciseSerializer(data=data)
        if new_exercise.is_valid():
            new_exercise.save()
            return Response(new_exercise.data, status=HTTP_201_CREATED)
        return Response(new_exercise.errors, status=HTTP_400_BAD_REQUEST)