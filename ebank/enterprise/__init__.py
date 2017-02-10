# coding=utf-8

import hashlib

from flask import Flask, request, render_template, session
from flask import json
from sqlalchemy.exc import IntegrityError

from ..model import sqlalchemy
from ..model.enterprise import Enterprise
from ..model.sms_verification import SmsVerification
from ..sms import sms
from ..utils import response_success, response_failure
from ..utils import set_encoding

set_encoding()
app = Flask(__name__)
app.config.from_pyfile('../config.py')
sms.init_app(app)
sqlalchemy.init_app(app)
sqlalchemy.create_all(app=app)


@app.route('/')
def index():
    if 'account' in session:
        enterprise = Enterprise.query.filter_by(account=session['account']).first()
        user = {
            'name': enterprise.business_name,
        }
    else:
        user = None
    return render_template('index.html', user=user)


@app.route('/get_verification_code/<mobile>')
def get_verification_code(mobile):
    return response_success(sms.send_verification_code(mobile))


def hash_string(string, salt=''):
    return hashlib.sha1(string).hexdigest()


@app.route('/register', methods=['POST'])
def register():
    if SmsVerification.verify(request.form['contacts-mobile'], request.form['verification-code']):
        enterprise = Enterprise()
        enterprise.business_id = request.form['business-id']
        enterprise.business_name = request.form['business-name']
        enterprise.contacts_name = request.form['contacts-name']
        enterprise.contacts_mobile = request.form['contacts-mobile']
        enterprise.account = request.form['account']
        enterprise.password = hash_string(request.form['password'])
        sqlalchemy.session.add(enterprise)
        try:
            sqlalchemy.session.commit()
            return response_success(True)
        except:
            return response_failure('注册失败')
    else:
        return response_failure('验证码不匹配')


@app.route('/login', methods=['POST'])
def login():
    account = request.form['account']
    password_hash = hash_string(request.form['password'])
    user = Enterprise.query.filter_by(account=account, password=password_hash).first()
    if not user:
        user = Enterprise.query.filter_by(contacts_mobile=account, password=password_hash).first()
    if user:
        session['account'] = user.account
        return response_success(True)
    else:
        return response_failure('账号与密码不匹配')
