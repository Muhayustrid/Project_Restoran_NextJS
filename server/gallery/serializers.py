from .models import GalleryItem
from rest_framework import serializers


class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = ['id', 'title', 'image']