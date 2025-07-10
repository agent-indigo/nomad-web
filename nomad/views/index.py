"""
View for rendering the React.js client app
"""
from urllib.request import Request
from django.shortcuts import render
# Create your views here.
def index(request: Request):
    """
    React.js client app request handler
    """
    return render(
        request,
        'index.html'
    )
