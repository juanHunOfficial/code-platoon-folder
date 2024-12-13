from rest_framework import serializers
from .models import ChartData

class ChartDataSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format="%m/%d/%Y")
    class Meta:
        model =  ChartData
        # fields = ['workout_id', 'exercise_name', 'type', 'goal_num_of_sets', 'goal_num_of_reps', 'actual_num_of_sets', 'actual_num_of_reps',]
        fields = '__all__'