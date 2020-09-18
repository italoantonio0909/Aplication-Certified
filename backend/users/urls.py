from django.contrib import admin
from django.urls import path,include
from users import views

urlpatterns = [
    path('api/auth/', include('rest_auth.urls')),
    path('api/auth/registration/', include('rest_auth.registration.urls')),
    path('api/auth/registration/complete/',views.Registration.as_view()),
    path('api/auth/me/',views.UserDetail.as_view()),
     path('api/auth/users/',views.UsersList.as_view())
]
