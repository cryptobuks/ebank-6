from flask import json, make_response


def set_encoding(encoding='utf-8'):
    import sys
    reload(sys)
    sys.setdefaultencoding(encoding)


def response_success(data):
    response = make_response(json.dumps(data))
    response.headers['Content-Type'] = 'application/json; charset=utf-8'
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


def response_failure(message, code=400):
    response = make_response(json.dumps({'message': message}))
    response.headers['Content-Type'] = 'application/json; charset=utf-8'
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response, code
