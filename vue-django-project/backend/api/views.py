from django.shortcuts import render

# Create your views here.

# https://ccbv.co.uk/ - ListView, LoginView
from django.http import JsonResponse
from django.views.generic import View
from django.views.generic.list import BaseListView
from django.views.generic.detail import BaseDetailView
from django.views.generic.edit import BaseCreateView
from django.views.decorators.cache import never_cache

from django.contrib.auth import login, logout, get_user_model, update_session_auth_hash, get_user
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.db.models import Count

from django.utils.decorators import method_decorator

from blog.models import Post
from accounts.forms import MyUserCreationForm
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


class ApiLoginView(LoginView):
    def form_valid(self, form):
        """Security check complete. Log the user in."""
        # auth_login(self.request, form.get_user())
        # return HttpResponseRedirect(self.get_success_url())
        user = form.get_user()
        login(self.request, user)
        # userDict = vars(user)
        # del userDict['_state'], userDict['password']
        userDict = {
            'id': user.id,
            'username': user.username,
        }
        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        """If the form is invalid, render the invalid form."""
        # return self.render_to_response(self.get_context_data(form=form))
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiRegisterView(BaseCreateView):
    # 아래에 있는 Model 정보는 이미 가입된 사용자 정보를 가지고 있다. (username, password)
    # 하지만 신규 가입자는 username, password1, password2 와 같이 다른 Form 정보를 가지고 있기 때문에 변경이 필요한다.
    # model = get_user_model()
    # fields = '__all__'
    # from django.contrib.auth.forms import UserCreationForm Override
    form_class = MyUserCreationForm

    def form_valid(self, form):
        """If the form is valid, save the associated model."""
        self.object = form.save()
        userDict = {
            'id': self.object.id,
            'username': self.object.username,
        }
        # return super().form_valid(form)
        return JsonResponse(data=userDict, safe=True, status=201)

    def form_invalid(self, form):
        """If the form is invalid, render the invalid form."""
        # return self.render_to_response(self.get_context_data(form=form))
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)
        # next_page = self.get_next_page()
        # if next_page:
        #     # Redirect to this page until the session has been cleared.
        #     return HttpResponseRedirect(next_page)
        # return super().dispatch(request, *args, **kwargs)
        return JsonResponse(data={}, safe=True, status=200)


class ApiPwdChgView(PasswordChangeView):
    def form_valid(self, form):
        form.save()
        # Updating the password logs out all other sessions for the user
        # except the current one.
        update_session_auth_hash(self.request, form.user)
        # return super().form_valid(form)
        print("success")
        return JsonResponse(data={}, safe=True, status=200)

    def form_invalid(self, form):
        """If the form is invalid, render the invalid form."""
        # return self.render_to_response(self.get_context_data(form=form))
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiMeView(View):
    def get(self, request, *args, **kwargs):
        user = get_user(request)
        if user.is_authenticated:
            userDict = {
                'id': user.id,
                'username': user.username
            }
        else:
            userDict = {
                'username': 'Anonymous',
            }
        return JsonResponse(data=userDict, safe=True, status=200)
