# Generated by Django 5.1.3 on 2024-12-05 18:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exercise_app', '0003_rename_num_of_reps_exercise_actual_num_of_reps_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='workout',
            new_name='workout_id',
        ),
    ]
