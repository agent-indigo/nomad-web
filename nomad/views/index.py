from django.shortcuts import render
from urllib.request import Request
# Create your views here.
def index(request: Request):
  return render(
    request,
    'index.html'
  )