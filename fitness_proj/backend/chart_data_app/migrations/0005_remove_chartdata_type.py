# Generated by Django 5.1.3 on 2024-12-17 21:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chart_data_app', '0004_remove_chartdata_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chartdata',
            name='type',
        ),
    ]
