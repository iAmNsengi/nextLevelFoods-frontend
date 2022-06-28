from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.lecturer)
admin.site.register(models.student)
admin.site.register(models.classe)
admin.site.register(models.department)


