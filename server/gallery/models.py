from django.db import models

# Create your models here.
class GalleryItem(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/gallery/')

    def __str__(self):
        return self.title
