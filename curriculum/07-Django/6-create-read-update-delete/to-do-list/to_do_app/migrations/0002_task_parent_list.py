# Generated by Django 5.1.3 on 2024-11-20 20:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('list_app', '0001_initial'),
        ('to_do_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='parent_list',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='list_app.list'),
        ),
    ]
