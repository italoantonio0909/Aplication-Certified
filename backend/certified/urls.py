from django.urls import path,include
from certified import views

urlpatterns = [
   path('api/citizen/',views.Citizen.as_view()),
   path('api/category/',views.Category.as_view()),
   path('api/option/',views.Option.as_view()),
   path('api/category_certified/',views.CategoryCertified.as_view())
]