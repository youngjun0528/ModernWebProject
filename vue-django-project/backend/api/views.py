from django.shortcuts import render

# Create your views here.

# https://ccbv.co.uk/ - ListView
from django.http import JsonResponse
from django.views.generic.list import BaseListView
from django.views.generic.detail import BaseDetailView
from django.db.models import Count

from blog.models import Post
from api.views_util import obj_to_post, prev_next_post, make_tag_cloud

from taggit.models import Tag


class ApiPostLV(BaseListView):
    # model = Post
    def get_queryset(self):
        tagname = self.request.GET.get('tagname')
        if tagname:
            qs = Post.objects.filter(tags__name=tagname)
        else:
            qs = Post.objects.all()
        return qs

    # def render_to_response(self, context, **response_kwargs):
    #     """
    #     Return a response, using the `response_class` for this view, with a
    #     template rendered with the given context.
    #     Pass response_kwargs to the constructor of the response class.
    #     """
    #     response_kwargs.setdefault('content_type', self.content_type)
    #     return self.response_class(
    #         request=self.request,
    #         template=self.get_template_names(),
    #         context=context,
    #         using=self.template_engine,
    #         **response_kwargs
    #     )

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # [{...},{...}] in DRF_Serialize : 직렬화
        postList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        return JsonResponse(data=post, safe=True, status=200)


class ApiTagCloudLV(BaseListView):
    # 아래 3개 문장은 동일한 의미의 ORM 이다.
    # 1. model = Tag
    # 2. queryset = Tag.objects.all()
    # 3. def get_queryset(self):
    #       return Tag.objects.all()

    queryset = Tag.objects.annotate(count=Count('post'))

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # tagList = []
        # for obj in qs:
        #     tagList.append(
        #         {
        #             'name': obj.name,
        #             # 'count': obj.name,
        #             # 'weight': obj.name,
        #         }
        #     )
        tagList = make_tag_cloud(qs)
        return JsonResponse(data=tagList, safe=False, status=200)
