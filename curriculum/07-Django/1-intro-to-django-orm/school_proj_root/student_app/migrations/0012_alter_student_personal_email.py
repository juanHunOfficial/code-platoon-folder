# Generated by Django 5.1.3 on 2024-11-14 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0011_alter_student_locker_combination_alter_student_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='personal_email',
            field=models.EmailField(default=None, max_length=255, unique=True),
        ),
    ]
