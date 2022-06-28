from django.db import models

# Create your models here.
class department(models.Model):
    school = models.CharField('School',null=False, max_length=50)
    department = models.CharField('Department',max_length=50)
    
    def __str__(self):
        return self.department

class classe(models.Model):
    fullname = models.CharField('Class Name',max_length=20, unique=True)
    shortname = models.CharField('Short Name',max_length=10, unique=True)
    department = models.ForeignKey(department, on_delete=models.CASCADE)

    def __str__(self) :
        return self.shortname

class lecturer(models.Model):
    sn = models.CharField('Serial Number',primary_key=True,max_length=10)
    department = models.ManyToManyField(department)
    firstname = models.CharField('First Name', max_length=50)
    lastname = models.CharField('Last Name', max_length=50)
    idnumber = models.CharField('National Id',max_length=13,unique=True)
    email= models.EmailField(null=False,unique=True)
    phone=models.CharField('Phone Number', max_length=15)
    image = models.ImageField(upload_to='media/images/lecturer_profiles')

    def __str__(self):
        return self.firstname + ' ' + self.lastname

class student(models.Model):
    rollnumber = models.CharField('Rollnumber',primary_key=True,max_length=10)
    department = models.ForeignKey(department,on_delete=models.CASCADE)
    currentclass= models.ForeignKey(classe,  on_delete=models.CASCADE)
    firstname = models.CharField('First Name', max_length=50)
    lastname = models.CharField('Last Name', max_length=50)
    idnumber = models.CharField('National Id',max_length=13)
    email= models.EmailField(null=False)
    phone=models.CharField('Phone Number', max_length=15)
    image = models.ImageField(upload_to='media/images/student_profiles')

    def __str__(self):
        return self.firstname + ' ' + self.lastname
