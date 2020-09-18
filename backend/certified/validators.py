from certified import models
from rest_framework import serializers

def identificationCard(identification_card):
    identification_card=models.Citizen.objects.filter(identification_card=identification_card)
    if len(identification_card)!=0:
        raise serializers.ValidationError("Ya existe ésta cédula")
    return identification_card

def email(email):
    email=models.Citizen.objects.filter(email=email)
    if len(email)!=0:
        raise serializers.ValidationError("Ya existe este correo")
    return email

def category(category):
    category_exists=models.Category.objects.filter(name=category)
    if len(category_exists)!=0:
        raise serializers.ValidationError("Ya existe ésta categoría")
    return category
