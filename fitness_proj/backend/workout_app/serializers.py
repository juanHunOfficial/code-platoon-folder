from rest_framework import serializers
from .models import Workout
from exercise_app.serializers import ExerciseSerializer

class WorkoutSerializer(serializers.ModelSerializer):
    exercises = serializers.SerializerMethodField()
    class Meta:
        model =  Workout
        fields = [
                  'id', 
                  'tracker_id', 
                  'workout_name', 
                  'type_of_workout', 
                  'weekly_frequency', 
                  'exercises'
                ]
        
    def get_exercises(self, instance):
        exercises = instance.exercises.all()
        ser_exercises = ExerciseSerializer(exercises, many=True)
        return ser_exercises.data