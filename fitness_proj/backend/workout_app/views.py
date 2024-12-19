from django.shortcuts import render, get_object_or_404
from .models import Workout
from .serializers import WorkoutSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT

# Create your views here.

class AllWorkouts(APIView):
    
    def get(self, request):
        ser_workouts = WorkoutSerializer(Workout.objects.all().order_by('id'), many=True)
        return Response(ser_workouts.data)
    
    def post(self, request):
        data = request.data.copy()
        
        new_workout = WorkoutSerializer(data=data)
        if new_workout.is_valid():
            new_workout.save()
            return Response(new_workout.data, status=HTTP_201_CREATED)
        return Response(new_workout.errors, status=HTTP_400_BAD_REQUEST)

class SingleWorkout(APIView):
    
    def put(self, request, workout_id):
        data = request.data.copy()
        updated_workout = get_object_or_404(Workout, id=workout_id)
        updated_workout.workout_name = data['workout_name']   
        updated_workout.weekly_frequency = data['weekly_frequency']
        updated_workout.type_of_workout = data['type_of_workout']
        updated_workout.save()
        return Response(WorkoutSerializer(updated_workout).data, status=HTTP_200_OK)
    
    def get(self, request, workout_id):
        return Response(WorkoutSerializer(Workout.objects.get(id=workout_id).order_by('id')).data, status=HTTP_200_OK)
    
    def delete(self, request, workout_id):
        workout_id = get_object_or_404(Workout, id=workout_id)
        workout_id.delete()
        return Response(status=HTTP_204_NO_CONTENT)