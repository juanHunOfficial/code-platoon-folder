from rest_framework import serializers
from .models import Workout

class WorkoutSerializer(serializers.ModelSerializer):
    exercises = serializers.SerializerMethodField()
    class Meta:
        model =  Workout
        fields = '__all__'
        
    def get_exercises(self, instance):
        exercises = instance.exercises.all()
        ser_exercises = [{
            'exercise_name': exercise.exercise_name, 
            'iteration': exercise.iteration, 
            'type': exercise.type,
            'goal_num_of_reps': exercise.goal_num_of_reps,
            'goal_num_of_sets': exercise.goal_num_of_sets,
            'actual_num_of_reps': exercise.actual_num_of_reps,
            'actual_num_of_sets' : exercise.actual_num_of_sets,
            'weight': exercise.weight,
            'workout_id': exercise.workout_id
        } for exercise in exercises]
        return ser_exercises