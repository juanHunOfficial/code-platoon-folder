from rest_framework import serializers
from .models import Workout

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Workout
        fields = ['workout_name', 'weekly_frequency', 'type_of_workout']