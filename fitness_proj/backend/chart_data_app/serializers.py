from rest_framework import serializers
from .models import ChartData

class ChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model =  ChartData
        fields = [
            "id",
            "goal_num_of_reps",
            "goal_num_of_sets",
            "actual_num_of_reps",
            "actual_num_of_sets",
            "weight",
            "exercise_id"
        ]