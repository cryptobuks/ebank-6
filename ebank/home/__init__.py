# coding=utf-8

from flask import Flask, request, render_template
from ..utils import set_encoding

set_encoding()
app = Flask(__name__)
app.config.from_pyfile('../config.py')


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
                'url': '/service',
                'active': request.path == '/service',
            },
            {
                'title': '预算管理',
                'url': '/management',
                'active': request.path == '/management',
            },
        ]
    }


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/service')
def service():
    return render_template('service.html')


@app.route('/management')
def management():
    return render_template('management.html')
