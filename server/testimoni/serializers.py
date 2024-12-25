from .models import Testimonial
from rest_framework import serializers

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'role', 'comment', 'rating', 'photo']