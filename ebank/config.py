# coding=utf-8
import os

SECRET_KEY = os.getenv('SECRET_KEY', 'SECRET_KEY')
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///../ebank.sqlite')
SQLALCHEMY_TRACK_MODIFICATIONS = True

SMS_ACCESS_KEY = 'LTAI7M50j5C6POdg'
SMS_SECRET_KEY = 'GPd3SMAIX6jRnJRTZW3M15byz3u4Vp'
SMS_SIGN_NAME = '易伴金服'
