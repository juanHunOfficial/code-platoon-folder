from django.urls import path
from .views import all_students

urlpatterns = [
    #what this is now is
    #http://localhost:8000/api/v1/student/
    path('', all_students, name="all_students"),
]