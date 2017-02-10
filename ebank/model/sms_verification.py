import random
from datetime import datetime

from . import sqlalchemy


class SmsVerification(sqlalchemy.Model):
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    code = sqlalchemy.Column(sqlalchemy.String(10), nullable=False)
    mobile = sqlalchemy.Column(sqlalchemy.String(20), nullable=False)
    available = sqlalchemy.Column(sqlalchemy.Boolean, default=True)
    update_time = sqlalchemy.Column(sqlalchemy.DateTime, nullable=False)

    def __init__(self, mobile=None):
        self.code = self.generate_verification_code()
        self.mobile = mobile
        self.update_time = datetime.now()

    def is_available(self):
        return self.available and self.time_elapsed() < 600

    def time_elapsed(self):
        return (datetime.now() - self.update_time).total_seconds()

    @staticmethod
    def get(mobile):
        sms_verification = SmsVerification.query.filter_by(mobile=mobile).first()
        if sms_verification is None:
            sms_verification = SmsVerification(mobile)
            sqlalchemy.session.add(sms_verification)
            sqlalchemy.session.commit()
        elif not sms_verification.available:
            sms_verification.available = True
            sms_verification.code = SmsVerification.generate_verification_code()
            sms_verification.update_time = datetime.now()
            sqlalchemy.session.commit()
        else:
            time_elapsed = sms_verification.time_elapsed()
            if time_elapsed < 60:
                return None
            elif time_elapsed > 600:
                sms_verification.code = SmsVerification.generate_verification_code()
                sms_verification.update_time = datetime.now()
                sqlalchemy.session.commit()
        return sms_verification

    @staticmethod
    def generate_verification_code(length=6):
        verification_code = ''
        for i in range(0, length):
            verification_code += str(random.randint(0, 9))
        return verification_code

    @staticmethod
    def verify(mobile, code):
        return SmsVerification.query.filter_by(mobile=mobile, code=code).first() is not None
