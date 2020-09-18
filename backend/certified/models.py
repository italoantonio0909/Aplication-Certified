from django.db import models

class Citizen(models.Model):
    identification_card=models.CharField(max_length=10,null=False)
    first_name=models.CharField(max_length=50,null=False)
    last_name=models.CharField(max_length=50,null=False)
    address=models.CharField(max_length=50,null=False)
    email=models.EmailField(null=False)
    phone=models.CharField(max_length=10)
    status=models.BooleanField(default=True)

class Category(models.Model):
    name=models.CharField(max_length=50,null=False)
    status=models.BooleanField(default=True)

class Option(models.Model):
    category=models.ForeignKey(Category,on_delete=models.PROTECT)
    name=models.CharField(max_length=50,null=False)
    status=models.BooleanField(default=True)


class CategoryCertified(models.Model):
    name=models.CharField(max_length=50,null=False)
    avatar=models.ImageField(upload_to='avatar_certified')
    status=models.BooleanField(default=True)

class Certified(models.Model):
    category=models.ForeignKey(CategoryCertified,on_delete=models.PROTECT)
    codigo=models.CharField(max_length=50,null=False)
    citizen=models.ForeignKey(Citizen,on_delete=models.PROTECT)