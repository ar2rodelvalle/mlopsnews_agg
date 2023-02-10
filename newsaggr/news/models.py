# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.


from unittest.util import _MAX_LENGTH
from django.db import models
# from django_resized import ResizedImageField

class ApprovedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=Article.Status.APPROVED)

class FitsManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(image_fit=Article.ImageFit.FIT)

class Article(models.Model):

    # id = models.IntegerField(primary_key=True,blank=True, null=False)
    title = models.CharField(max_length=250)
    date_published = models.DateTimeField(blank=True, null=True)
    query_str = models.CharField(max_length=250, blank=True, null=True)    
    snippet = models.TextField(blank=True, null=True)
    web_url = models.URLField(blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)
    image_width=models.IntegerField(blank=True,null=True)
    image_ratio_wh = models.DecimalField(decimal_places=2, max_digits=4)
    objects = models.Manager()
    

    class Status(models.TextChoices):
        APPROVED = 'A','Approved'
        REVIEWING= 'R','Reviewing'

    status=models.CharField(max_length=3,
                            choices=Status.choices,
                            default=Status.REVIEWING)   

    
    approved = ApprovedManager()

    class ImageFit(models.TextChoices):
        FIT = 'F', 'Fit'
        DISTORTED='D', 'Distorted' 
    
    image_fit=models.CharField(max_length=1,choices=ImageFit.choices,default=ImageFit.DISTORTED)

    def update_image_fit(self):
        if 1.5 <= self.image_ratio_wh <= 2.2:
            self.image_fit = self.ImageFit.FIT
        else:
            self.image_fit = self.ImageFit.DISTORTED
     
    fits = FitsManager()


    class Meta:
        managed = True
        db_table = 'news'

    def __str__(self):
        return self.title


# class News(models.Model):
#     id = models.TextField(blank=True, null=True)
#     query_str = models.TextField(blank=True, null=True)
#     title = models.TextField(blank=True, null=True)
#     snippet = models.TextField(blank=True, null=True)
#     date_published = models.TextField(blank=True, null=True)
#     web_url = models.TextField(blank=True, null=True)
#     description = models.TextField(blank=True, null=True)
#     image_url = models.TextField(blank=True, null=True)
#     image_width = models.BigIntegerField(blank=True, null=True)
#     image_height = models.BigIntegerField(blank=True, null=True)
#     thumbnail = models.TextField(blank=True, null=True)
#     thumbnail_height = models.BigIntegerField(blank=True, null=True)
#     thumbnail_width = models.BigIntegerField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'news'
