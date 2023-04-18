from django.db import models

# Create your models here.
class File(models.Model):
    file = models.FileField(upload_to="files")
    created = models.DateTimeField(auto_now_add=True)

class Book(models.Model):
    name = models.CharField(max_length=200)
    authors = models.CharField(max_length=100)
    user_ratings = models.FloatField(max_length=10)
    reviews = models.IntegerField()
    price = models.FloatField(max_length=10)
    year = models.IntegerField()
    genre = models.CharField(max_length=100)
    createdAt = models.DateTimeField(auto_now_add=True)