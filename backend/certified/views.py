from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from certified import serializers
from certified import models
# Create your views here.


class Citizen(ListCreateAPIView):
    serializer_class=serializers.CitizenSerializer
    queryset=models.Citizen.objects.all()

    def post(self,request,*args,**kwargs):
        serializer=serializers.CitizenSerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.errors,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class Category(ListCreateAPIView):
    serializer_class=serializers.CategorySerializer
    queryset=models.Category.objects.all()

    def post(self,request,*args,**kwargs):
        serializer=serializers.CategorySerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class Option(ListCreateAPIView):
    serializer_class=serializers.OptionSerializer
    queryset=models.Option.objects.all()

    def post(self,request,*args,**kwargs):
        serializer=serializers.OptionSerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
         
class CategoryCertified(ListCreateAPIView):
    serializer_class=serializers.CertifiedCategorySerializer
    queryset=models.CategoryCertified.objects.all()

    def post(self,request,*args,**kwargs):
        serializer=serializers.CertifiedCategorySerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
         
