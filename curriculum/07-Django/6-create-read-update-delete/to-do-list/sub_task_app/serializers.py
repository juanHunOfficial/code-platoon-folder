from rest_framework import serializers
from .models import Sub_Task

class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sub_Task
        fields = ['sub_task_name', 'completed']
        
        