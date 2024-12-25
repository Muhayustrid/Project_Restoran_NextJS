from django.db import models

# Create your models here.
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, blank=True)
    comment = models.TextField()
    rating = models.PositiveIntegerField(default=5)
    photo = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.comment[:20]}..."
