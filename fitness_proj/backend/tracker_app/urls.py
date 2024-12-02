from django.urls import path
from .views import AllTrackers, SingleTracker

urlpatterns = [
    path('', AllTrackers.as_view(), name='all_tracker'),
    path('<str:tracker_name>/', SingleTracker.as_view(), name='single_tracker'),
]
