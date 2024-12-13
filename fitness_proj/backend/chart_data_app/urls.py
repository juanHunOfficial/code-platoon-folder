from django.urls import path
from .views import AllChartData, SingleChartData

urlpatterns = [
    path('', AllChartData.as_view(), name='all_charts'),
    path('<int_or_str:chart>/', SingleChartData.as_view(), name='single_chart'),
]
