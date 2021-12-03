from django.urls import path

from . import views

app_name = 'blog'

urlpatterns = [
    path('post/list/', views.PostLV.as_view(), name='post_list'),
    path('post/<int:pk>', views.PostDV.as_view(), name='post_detail')
]
