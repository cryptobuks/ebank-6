# coding=utf-8
import base64
import hashlib
import hmac
import urllib
import uuid
from collections import OrderedDict
from datetime import datetime

import requests

from .model.sms_verification import SmsVerification


class Sms:
    def __init__(self, sign_name='', access_key='', secret_key=''):
        self.sign_name = sign_name
        self.access_key = access_key
        self.secret_key = secret_key

    def init_app(self, app):
        self.__init__(
            app.config['SMS_SIGN_NAME'],
            app.config['SMS_ACCESS_KEY'],
            app.config['SMS_SECRET_KEY'])

    def sign(self, params):
        string = 'POST&%2F&' + urllib.quote_plus(urllib.urlencode(params))
        params['Signature'] = base64.encodestring(hmac.new(
            self.secret_key + '&', string, hashlib.sha1).digest()).strip()
        return params

    def send(self, mobile, template_code, param):
        params = self.sign(OrderedDict([
            ('AccessKeyId', self.access_key),
            ('Action', 'SingleSendSms'),
            ('Format', 'JSON'),
            ('ParamString', param),
            ('RecNum', mobile),
            ('SignName', self.sign_name),
            ('SignatureMethod', 'HMAC-SHA1'),
            ('SignatureNonce', uuid.uuid4()),
            ('SignatureVersion', '1.0'),
            ('TemplateCode', template_code),
            ('Timestamp', datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')),
            ('Version', '2016-09-27'),
        ]))
        return requests.post('https://sms.aliyuncs.com', data=params).json()

    @staticmethod
    def verify(mobile, code):
        return SmsVerification.verify(mobile, code)

    def send_verification_code(self, mobile):
        sms_verification = SmsVerification.get(mobile)
        if sms_verification:
            self.send(mobile, 'SMS_45995002', '{"name":"' + sms_verification.code + '"}')
            return True
        else:
            return False


sms = Sms()
