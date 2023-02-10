# from django.contrib import admin

# from .models import Article
# @admin.register(Article)
# class PostAdmin(admin.ModelAdmin):
#     list_display = ['title', 'snippet','status']
    

    # list_filter = ['status', 'created', 'publish', 'author']
    # raw_id_fields = ['author']
    # date_hierarchy = 'publish'
    # ordering = ['status', 'publish']


from django.contrib import admin
from .models import Article

class ArticleAdmin(admin.ModelAdmin):
    
    list_display = ['title', 'query_str', 'status','date_published','image_ratio_wh']
    ordering = ['-date_published']
    actions = ['approve_selected']

    def approve_selected(self, request, queryset):
        queryset.update(status=Article.Status.APPROVED)
    
    approve_selected.short_description = "Approve selected articles"

admin.site.register(Article, ArticleAdmin)