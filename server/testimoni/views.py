from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialView(generics.ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
