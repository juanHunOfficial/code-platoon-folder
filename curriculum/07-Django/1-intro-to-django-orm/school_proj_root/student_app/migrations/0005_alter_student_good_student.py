# Generated by Django 5.1.3 on 2024-11-14 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0004_alter_student_good_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='good_student',
            field=models.BooleanField(default=False),
        ),
    ]