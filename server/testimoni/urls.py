from django.urls import path
from .views import TestimonialView


urlpatterns = [
       path("", TestimonialView.as_view()),

]
