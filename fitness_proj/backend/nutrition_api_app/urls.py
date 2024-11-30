from django.urls import path
from .views import NutritionAPI

urlpatterns = [
    path('<str:meal>/', NutritionAPI.as_view(), name="nurtition_api_meal_search"),
    
]
