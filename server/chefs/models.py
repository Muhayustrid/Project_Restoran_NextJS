from django.db import models

class Chef(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='images/chefs/', blank=True, null=True)

    def __str__(self):
        return self.name
