# Generated by Django 5.1.3 on 2024-11-20 20:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('to_do_app', '0008_alter_task_parent_list'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sub_Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_task_name', models.CharField(max_length=255)),
                ('completed', models.BooleanField(default=False)),
                ('parent_task', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='to_do_app.task')),
            ],
        ),
    ]
