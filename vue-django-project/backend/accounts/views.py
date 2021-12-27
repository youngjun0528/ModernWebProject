from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin, AccessMixin
from django.http import JsonResponse
# Create your views here.


class MyLoginRequiredMixin(LoginRequiredMixin):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            # return self.handle_no_permission()
            responseData = {'message': 'You are login required (401) !'}
            return JsonResponse(data=responseData, safe=True, status=401)
        return super().dispatch(request, *args, **kwargs)


class OwnerOnlyMixin(AccessMixin):
    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        if request.user != self.object.owner:
            responseData = {
                'message': 'Owner only can update or delete (403) !'}
            return JsonResponse(data=responseData, safe=True, status=403)
        return super().dispatch(request, *args, **kwargs)
