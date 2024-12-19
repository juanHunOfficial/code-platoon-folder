from rest_framework import serializers
from .models import Tracker
from workout_app.serializers import WorkoutSerializer

class TrackerSerializer(serializers.ModelSerializer):
    workouts = serializers.SerializerMethodField()
    user_id = serializers.IntegerField()
    class Meta:
        model = Tracker
        fields = ['id', 'user_id', 'user', 'tracker_name', 'workouts']
        
    def get_workouts(self, instance):
        workouts = instance.workouts.all().order_by('id')
        ser_workouts = WorkoutSerializer(workouts, many=True)
        return ser_workouts.data
    