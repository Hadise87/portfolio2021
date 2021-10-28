from django.db import models

# Create your models here.
from django.db import models


class Question1(models.Model):
    question1_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question1 = models.ForeignKey(Question1, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
