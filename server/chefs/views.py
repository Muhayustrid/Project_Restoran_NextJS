from rest_framework import generics
from .models import Chef
from .serializers import ChefSerializer

class ChefListView(generics.ListAPIView):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer
