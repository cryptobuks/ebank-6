from flask import Blueprint
from .utils import response_success

blueprint = Blueprint('client', __name__, url_prefix='/enterprise')


@blueprint.route('/')
def index():
    return response_success('hello')
