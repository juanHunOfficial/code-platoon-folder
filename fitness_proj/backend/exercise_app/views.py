from django.shortcuts import get_object_or_404
from .models import Exercise
from .serializers import ExerciseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT

# Create your views here.
class AllExercises(APIView):
    
    def get(self, request):
        ser_exercises = ExerciseSerializer(Exercise.objects.all(), many=True)
        return Response(ser_exercises.data)
    
    def post(self, request):
        data = request.data.copy()
        
        new_exercise = ExerciseSerializer(data=data)
        if new_exercise.is_valid():
            new_exercise.save()
            return Response(new_exercise.data, status=HTTP_201_CREATED)
        return Response(new_exercise.errors, status=HTTP_400_BAD_REQUEST)
    
class SingleExercise(APIView):
    
    def get_exercise(self, exercise):
        if type(exercise) == int:
            exercise = get_object_or_404(Exercise, id=exercise)
        else:
            exercise = get_object_or_404(Exercise, exercise=exercise)
        return exercise
    
    def get(self, request, exercise):
        a_ser_exercise = ExerciseSerializer(self.get_exercise(exercise))
        return Response(a_ser_exercise.data)
    
    def put(self, request, exercise):
        data = request.data.copy()
        updated_exercise = self.get_exercise(exercise)
        updated_exercise.exercise_name = data['exercise_name']
        updated_exercise.save()
        return Response(ExerciseSerializer(updated_exercise).data, status=HTTP_200_OK)
    
    def delete(self, request, exercise):
        exercise = self.get_exercise(exercise)
        exercise.delete()
        return(Response(status=HTTP_204_NO_CONTENT))