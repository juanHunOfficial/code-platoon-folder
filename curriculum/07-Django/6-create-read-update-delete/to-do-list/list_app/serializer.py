from rest_framework import serializers
from .models import List
from to_do_app.serializers import TaskSerializer
class ListSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True)#many=True cuz many to one--- for instances with a list of objects not just 1
    class Meta:
        model = List
        fields = ['id', 'list_name', 'tasks']
        
        def get_tasks(self, instance):
            tasks = instance.tasks.all()
            ser_tasks = [task.task_name for task in tasks]
            return ser_tasks
            
        
        #create a converter to be able to reference 