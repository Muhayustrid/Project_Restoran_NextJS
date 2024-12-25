from django.urls import path
from .views import GalleryItemView


urlpatterns = [
    path("", GalleryItemView.as_view()),
    

]
