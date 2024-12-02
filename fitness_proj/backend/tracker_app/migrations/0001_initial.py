# Generated by Django 5.1.3 on 2024-12-02 18:53

import tracker_app.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tracker_name', models.CharField(validators=[tracker_app.validators.validate_tracker_name])),
            ],
        ),
    ]
