from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from users import models

class RegistrationSerializer(RegisterSerializer):
    first_name=serializers.CharField(required=True)
    last_name=serializers.CharField(required=True)
    email=serializers.EmailField(required=True)
    avatar=serializers.ImageField()

    def custom_signup(self,request,user):
        user.first_name=self.validated_data.get('first_name','')
        user.last_name=self.validated_data.get('last_name','')
        user.email=self.validated_data.get('email','')
        user.avatar=self.validated_data.get('avatar')
        user.save(update_fields=['first_name','last_name','avatar','email'])

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = models.CustomUser
        fields = ('username', 'email','first_name','last_name','avatar')