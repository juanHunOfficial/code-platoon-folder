from django.urls import path
from .views import All_students

urlpatterns = [
    #what this is now is
    #http://localhost:8000/api/v1/student/
    path('', All_students.as_view(), name="all_students"),
]