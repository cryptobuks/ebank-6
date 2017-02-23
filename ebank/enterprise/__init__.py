# coding=utf-8

import hashlib
from datetime import datetime

from flask import Flask, request, render_template, session, redirect

from ..model import sqlalchemy
from ..model.enterprise import Enterprise
from ..model.sms_verification import SmsVerification
from ..model.monthly_budget import MonthlyBudget
from ..model.cash_flow import CashFlow
from ..sms import sms
from ..cache import cache
from ..utils import response_success, response_failure
from ..utils import set_encoding

set_encoding()
app = Flask(__name__)
app.config.from_pyfile('../config.py')
sms.init_app(app)
cache.init_app(app)
sqlalchemy.init_app(app)
sqlalchemy.create_all(app=app)


@app.route('/')
def index():
    if 'account' in session and session['account']:
        enterprise = Enterprise.query.filter_by(account=session['account']).first()
        user = {
            'account': enterprise.account,
            'business_id': enterprise.business_id,
            'business_name': enterprise.business_name,
            'contacts_name': enterprise.contacts_name,
            'contacts_mobile': enterprise.contacts_mobile,
        }
    else:
        user = None
    return render_template('index.html', user=user)


@app.route('/get_verification_code/<mobile>')
def get_verification_code(mobile):
    return response_success(sms.send_verification_code(mobile))


def hash_string(string):
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


@app.route('/logout', methods=['GET'])
def logout():
    session['account'] = None
    return redirect('/#/login')


def get_current_enterprise():
    return Enterprise.query.filter_by(account=session['account']).first()


@app.route('/get_budget_table')
def get_budget_table():
    budget_table = cache.get('budget_table-' + session['account'])
    if budget_table:
        return response_success(budget_table)
    else:
        return response_success(None)


@app.route('/save_budget_table', methods=['POST'])
def save_budget_table():
    cache.set('budget_table-' + session['account'], request.form['data'])
    return response_success(True)
