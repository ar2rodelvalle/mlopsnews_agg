
from django.shortcuts import render
from django.db.models import Count
from news.models import Article

def news_list(request):

    articles = Article.approved.all()
    
    for article in articles:
        article.update_image_fit()
        article.save()

    fit_articles= Article.fits.all()
    tag_counts  = Article.approved.values('query_str').annotate(count=Count('query_str')).order_by('-count')

    return render(request, 'index.html', {'news_items': fit_articles,'tag_counts': tag_counts})