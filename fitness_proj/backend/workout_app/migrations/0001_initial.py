# Generated by Django 5.1.3 on 2024-12-02 19:22

import django.core.validators
import django.db.models.deletion
import workout_app.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tracker_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weekly_frequency', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(7)])),
                ('type_of_workout', models.CharField(validators=[workout_app.validators.validate_valid_workout_type])),
                ('tracker_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='workout', to='tracker_app.tracker')),
            ],
        ),
    ]
