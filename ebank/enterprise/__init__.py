# coding=utf-8

from flask import Flask, request, render_template
from ..utils import set_encoding

set_encoding()
app = Flask(__name__)
app.config.from_pyfile('../config.py')


@app.route('/')
def index():
    return render_template('index.html')
