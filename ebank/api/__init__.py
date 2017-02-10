# coding=utf-8

from flask import Flask
from ..utils import set_encoding
from ..model import sqlalchemy
from ..sms import sms
from .enterprise import blueprint as enterprise
from .utils import response_success

set_encoding()
app = Flask(__name__)
app.config.from_pyfile('../config.py')
app.register_blueprint(enterprise)
sms.init_app(app)
sqlalchemy.init_app(app)
sqlalchemy.create_all(app=app)


@app.route('/get_verification_code/<mobile>')
def get_verification_code(mobile):
    return response_success(sms.send_verification_code(mobile))
