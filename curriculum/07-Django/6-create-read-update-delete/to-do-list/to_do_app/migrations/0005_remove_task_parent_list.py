# Generated by Django 5.1.3 on 2024-11-20 20:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('to_do_app', '0004_alter_task_parent_list'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='parent_list',
        ),
    ]
