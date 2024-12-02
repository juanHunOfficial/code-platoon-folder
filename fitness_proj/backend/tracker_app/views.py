from django.shortcuts import render
from .models import Tracker
from workout_app.models import Workout
from .serializers import TrackerSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT

# Create your views here.
class AllTrackers(APIView):
    
    def get(self, request):
        ser_all_trackers = TrackerSerializer(Tracker.objects.all(), many=True)
        return Response(ser_all_trackers.data)
    
    def post(self, request):
        data = request.data.copy()
        
        new_tracker = TrackerSerializer(data=data)
        if new_tracker.is_valid():
            new_tracker.save()
            return Response(new_tracker.data, status=HTTP_201_CREATED)
        return Response(new_tracker.errors, status=HTTP_400_BAD_REQUEST)
    
#----------------------------------------------------------------------------------

class SingleTracker(APIView):
    def get_tracker(self, request, tracker_name):
        ser_tracker = Tracker.objects.get(tracker_name=tracker_name)
        return ser_tracker
    
    def put(self, request, tracker_name):
        data = request.data.copy()
        
        tracker = self.get_tracker(tracker_name)
        
        list_of_workouts = data.get('list_of_workouts')
        
        updated_tracker = TrackerSerializer(tracker, data=data, partial=True)
        
        if updated_tracker.is_valid():
            if list_of_workouts is not None:
                for workout in list_of_workouts:
                    if get_object_or_404(Workout, workout_name=workout.workout_name):
                        tracker.workouts.add(workout)#####this may need to be updated tracker not tracker#####
                        updated_tracker.save()
                        return Response(updated_tracker.data, status=HTTP_204_NO_CONTENT)
                    return Response(updated_tracker.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, tracker_name):
        tracker_name = self.get_tracker(tracker_name)
        tracker_name.delete()
        return Response(status=HTTP_204_NO_CONTENT)