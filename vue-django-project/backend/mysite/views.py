from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

# 최초 사용자가 페이지에 접근할 때에 csrftoken 정보가 없기 때문에 장고 서버에서 만들어서 보내주어야 한다.


@method_decorator(ensure_csrf_cookie, name='dispatch')
class HomeView(TemplateView):
    template_name = 'home.html'
