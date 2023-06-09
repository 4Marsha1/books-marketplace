# Generated by Django 4.2 on 2023-04-18 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('authors', models.CharField(max_length=100)),
                ('user_ratings', models.FloatField(max_length=10)),
                ('reviews', models.IntegerField()),
                ('price', models.FloatField(max_length=10)),
                ('year', models.IntegerField()),
                ('genre', models.CharField(max_length=100)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
