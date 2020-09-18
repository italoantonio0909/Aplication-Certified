from rest_framework.serializers import ModelSerializer
from certified import models
from django.contrib.auth.models import User
from certified import validators

class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields='__all__'


class CitizenSerializer(ModelSerializer):
    class Meta:
        model=models.Citizen
        fields='__all__'
        extra_kwargs={'identification_card':{'validators':[validators.identificationCard]},'email':{'validators':[validators.email]}}

class CategorySerializer(ModelSerializer):
    class Meta:
        model=models.Category
        fields='__all__'
        extra_kwargs={'name':{'validators':[validators.category]}}


class OptionSerializer(ModelSerializer):
    category=models.Option
    class Meta:
        model=models.Option
        fields='__all__'

class CertifiedCategorySerializer(ModelSerializer):
    class Meta:
        model=models.CategoryCertified
        fields='__all__'

class CertifiedSerializer(ModelSerializer):
    category=CertifiedCategorySerializer()
    citizen=CitizenSerializer()
    class Meta:
        model=models.Certified
        fields='__all__'