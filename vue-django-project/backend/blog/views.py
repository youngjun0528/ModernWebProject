from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView
from blog.models import Post

# Create your views here.

# Table 처리를 하는 경우네는 ListView / DetailView 를 사용하고
# 그냥 Tamplate 처리(html 응답)만 하는 경우에는 Tamplate View 를 사용한다.
# class PostLV(ListView):
#     model = Post
#     # template_name = 'blog/post_list.html'


# class PostDV(DetailView):
#     model = Post

class PostListTV(TemplateView):
    template_name = 'blog/post_list.html'


class PostDetailTV(TemplateView):
    template_name = 'blog/post_detail.html'
