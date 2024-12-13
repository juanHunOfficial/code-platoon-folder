from rest_framework import serializers
from .models import Workout

class WorkoutSerializer(serializers.ModelSerializer):
    exercises = serializers.SerializerMethodField()
    class Meta:
        model =  Workout
        fields = ['id', 
                  'tracker_id', 
                  'workout_name', 
                  'type_of_workout', 
                  'weekly_frequency', 
                  'exercises'
                ]
        
    def get_exercises(self, instance):
        exercises = instance.exercises.all()
        ser_exercises = [{
            'exercise_name': exercise.exercise_name, 
            'workout_id': exercise.workout_id.id
        } for exercise in exercises]
        return ser_exercises