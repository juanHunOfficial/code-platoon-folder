from rest_framework import serializers
from .models import Tracker

class TrackerSerializer(serializers.ModelSerializer):
    workouts = serializers.SerializerMethodField()
    class Meta:
        model = Tracker
        fields = ['tracker_name', 'workouts']
        
    def get_workouts(self, instance):
        workouts = instance.workouts.all()
        ser_workouts = [{"workout_name": workout.workout_name,"workout_type": workout.type_of_workout} for workout in workouts]
        return ser_workouts