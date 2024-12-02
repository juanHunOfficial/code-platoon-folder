from rest_framework import serializers
from .models import Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Exercise
        fields = ['exercise_name', 'type', 'num_of_sets', 'num_of_reps', 'workout']