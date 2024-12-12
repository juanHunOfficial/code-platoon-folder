from rest_framework import serializers
from .models import Tracker

class TrackerSerializer(serializers.ModelSerializer):
    workouts = serializers.SerializerMethodField()
    user_id = serializers.IntegerField()
    class Meta:
        model = Tracker
        fields = '__all__'
        
    def get_workouts(self, instance):
        workouts = instance.workouts.all()
        ser_workouts = [{
            "id": workout.id,
            "workout_name": workout.workout_name,
            "workout_type": workout.type_of_workout, 
            'exercises': self.get_exercises(workout)
        } for workout in workouts]
        return ser_workouts
    
    def get_exercises(self, workout):
        exercises = workout.exercises.all() 
        return [{
                    'id': exercise.id,
                    'exercise_name': exercise.exercise_name, 
                    'iteration': exercise.iteration, 
                    'type': exercise.type,
                    'goal_num_of_reps': exercise.goal_num_of_reps,
                    'goal_num_of_sets': exercise.goal_num_of_sets,
                    'actual_num_of_reps': exercise.actual_num_of_reps,
                    'actual_num_of_sets' : exercise.actual_num_of_sets,
                    'weight': exercise.weight,
                    'date': self.format_date(exercise.date),
                    'workout_id': exercise.workout_id.id
                } for exercise in exercises]
    
    def format_date(self, date_obj):
        if date_obj:
            return date_obj.strftime('%m/%d/%Y')
        return None