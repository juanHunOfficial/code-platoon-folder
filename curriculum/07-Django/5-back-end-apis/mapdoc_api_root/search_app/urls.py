from django.urls import path
from .views import Search_Project

urlpatterns = [
    path('', Search_Project.as_view(), name="search_project"),
    path('<str:search_text>/', Search_Project.as_view(), name='custom_search'),
    
]