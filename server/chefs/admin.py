from django.contrib import admin
from .models import Chef

@admin.register(Chef)
class ChefAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'photo']
