# Generated by Django 5.1.3 on 2024-11-15 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0013_student_subjects'),
        ('subject_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='subjects',
            field=models.ManyToManyField(default=None, related_name='students', to='subject_app.subject'),
        ),
    ]
