from users.serializers import RegistrationSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView
from rest_auth.registration.views import RegisterView
from users import models,serializers


class UserDetail(APIView):
    permission_classes=(IsAuthenticated,)
    authentication_classes=(TokenAuthentication,)

    def get(self,request,*args,**kwargs):
        return Response({'username':request.user.username,'avatar':request.user.avatar.url,'email':request.user.email,'id':request.user.id})


class Registration(RegisterView):
    serializer_class=RegistrationSerializer


class UsersList(ListAPIView):
    serializer_class=serializers.UserSerializer
    queryset=models.CustomUser.objects.all()