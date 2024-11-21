from django.urls import path, register_converter
from .converters import IntOrStrConverter
from .views import All_lists, A_list

register_converter(IntOrStrConverter, 'int_or_str')

urlpatterns = [
    path('', All_lists.as_view(), name="all_lists"),
    path('<int_or_str:id>/', A_list.as_view(), name='a_list'),
]
