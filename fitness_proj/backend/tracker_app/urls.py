from django.urls import path, register_converter
from .views import AllTrackers, SingleTracker
from .converters import IntOrStrConverter

register_converter(IntOrStrConverter, 'int_or_str')

urlpatterns = [
    path('', AllTrackers.as_view(), name='all_tracker'),
    path('<int_or_str:tracker_name>/', SingleTracker.as_view(), name='single_tracker'),
]
