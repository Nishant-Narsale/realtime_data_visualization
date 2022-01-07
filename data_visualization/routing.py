from django.urls import path
from dashboard import consumer



websocket_urlPatterns = [
    path('ws/dashboard/', consumer.DashConsumer.as_asgi())
]