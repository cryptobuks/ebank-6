from flask import Blueprint, request
from ..model import sqlalchemy
from ..model.enterprise import Enterprise
from .utils import response_success

blueprint = Blueprint('client', __name__, url_prefix='/enterprise')


@blueprint.route('/register', methods=['POST'])
def index():
    enterprise = Enterprise()
    enterprise.business_id = request.form['business-id']
    enterprise.business_name = request.form['business-name']
    enterprise.contacts_name = request.form['contacts-name']
    enterprise.contacts_mobile = request.form['contacts-mobile']
    enterprise.account = request.form['account']
    enterprise.password = request.form['password']
    sqlalchemy.session.add(enterprise)
    sqlalchemy.session.commit()
    return response_success(True)
