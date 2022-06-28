from django.shortcuts import render,redirect
from django.contrib.auth import login,authenticate,logout
from django.contrib.auth.forms import AuthenticationForm
from . import forms
from django.contrib import messages
from . import models
# Create your views here.


def home_lecturer(request):
    context ={}
    return render(request,'student/home.html')

def home_student(request):
    context ={}
    return render(request,'student/home.html')

def signin(request):
    if request.user.is_authenticated:
        return redirect('/home')
    if request.method == 'POST':
        username= request.POST['username']
        password = request.POST['password']
        user = authenticate(request,username=username,password=password)

        if user is not None:
            login(request,user)
            return redirect('/home')
        else:
            form = AuthenticationForm()
            messages.error(request,'Invalid Login credentials')
            return render(request,'signin.html',{'form':form})
    else:
        form = AuthenticationForm()
        return render(request,'signin.html',{'form':form})
