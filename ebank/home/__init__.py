# coding=utf-8

from flask import request, render_template
from .app import app

@app.context_processor
def context_processor():
    return {
        'navigation': [
            {
                'title': '首页',
                'url': '/',
                'active': request.path == '/',
            },
            {
                'title': '现金服务',
                'url': '/a',
                'active': request.path == 'a',
            },
            {
                'title': '预算管理',
                'url': '/b',
                'active': request.path == 'b',
            },
        ]
    }

@app.route('/')
def index():
    return render_template('index.html')
