# coding=utf-8

from flask import Flask
from ..utils import set_encoding
from .enterprise import blueprint as enterprise

set_encoding()
app = Flask(__name__)
app.config.from_pyfile('../config.py')
app.register_blueprint(enterprise)


@app.route('/')
def index():
    return ''
