from django.urls import path
from .views import ChefListView

urlpatterns = [
    path('', ChefListView.as_view(), name='chef-list'),
]
