# coding=utf-8

import sys
from flask import request, render_template
from .app import app

reload(sys)
sys.setdefaultencoding('utf-8')

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
