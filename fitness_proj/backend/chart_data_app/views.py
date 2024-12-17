from django.shortcuts import get_object_or_404
from .models import ChartData
from .serializers import ChartDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT

# Create your views here.
class AllChartData(APIView):
    
    def get(self, request):
        ser_chart = ChartDataSerializer(ChartData.objects.all(), many=True)
        return Response(ser_chart.data)
    
    def post(self, request):
        data = request.data.copy()
        
        new_chart = ChartDataSerializer(data=data)
        if new_chart.is_valid():
            new_chart.save()
            return Response(new_chart.data, status=HTTP_201_CREATED)
        return Response(new_chart.errors, status=HTTP_400_BAD_REQUEST)
    
class SingleChartData(APIView):
    
    def get_exercise(self, chart):
        if type(chart) == int:
            chart = get_object_or_404(ChartData, id=chart)
        else:
            chart = get_object_or_404(ChartData, chart=chart)
        return chart
    
    def get(self, request, chart):
        a_ser_chart = ChartDataSerializer(self.get_exercise(chart))
        return Response(a_ser_chart.data)
    
    def put(self, request, chart):
        chart = self.get_exercise(chart)
        body_data = request.data.copy()
        
        if(chart):
            chart.actual_num_of_reps = body_data['actual_num_of_reps']
            chart.actual_num_of_sets = body_data['actual_num_of_sets']
            chart.goal_num_of_reps = body_data['goal_num_of_reps']
            chart.goal_num_of_sets = body_data['goal_num_of_sets']
            chart.weight = body_data['weight']
            
            chart.save()
        else:
            return Response("INVALID NO EXERCISE WAS FOUND", status=HTTP_400_BAD_REQUEST)
        return Response(ChartDataSerializer(chart).data, status=HTTP_200_OK)
        
        
    
    def delete(self, request, chart):
        chart = self.get_exercise(chart)
        chart.delete()
        return(Response(status=HTTP_204_NO_CONTENT))