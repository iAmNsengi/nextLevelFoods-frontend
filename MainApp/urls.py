from django.urls import path
from . import views

urlpatterns=[
path('',views.signin,name='login'),
path('home/',views.home_lecturer,name='home'),
]