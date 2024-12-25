from django.shortcuts import render
from rest_framework import generics
from .models import GalleryItem
from .serializers import GalleryItemSerializer

# Create your views here.
class GalleryItemView(generics.ListAPIView):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer
