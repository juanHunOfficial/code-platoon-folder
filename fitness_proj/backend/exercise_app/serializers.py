from rest_framework import serializers
from .models import Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    charts = serializers.SerializerMethodField()
    class Meta:
        model =  Exercise
        fields = ['id', 'exercise_name', 'workout_id', 'charts']
        
    def get_charts(self, instance):
        charts = instance.charts.all().order_by('id')
        ser_chart_data = [{
            'id': chart.id,
            'goal_num_of_reps': chart.goal_num_of_reps,
            'goal_num_of_sets': chart.goal_num_of_sets,
            'actual_num_of_reps': chart.actual_num_of_reps,
            'actual_num_of_sets' : chart.actual_num_of_sets,
            'weight': chart.weight,
            'exercise_id': chart.exercise_id.id
        } for chart in charts]
        return ser_chart_data