from django.shortcuts import render, get_object_or_404
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
    def get_tracker(self, tracker_name):
        tracker = Tracker.objects.get(tracker_name=tracker_name)
        return tracker
    
    def get(self, request, tracker_name):
        a_ser_tracker = TrackerSerializer(self.get_tracker(tracker_name))
        return Response(a_ser_tracker.data)

    def delete(self, request, tracker_name):
        tracker_name = self.get_tracker(tracker_name)
        tracker_name.delete()
        return Response(status=HTTP_204_NO_CONTENT)