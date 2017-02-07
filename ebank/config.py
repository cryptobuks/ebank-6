import os

SECRET_KEY = os.getenv('SECRET_KEY', 'SECRET_KEY')
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///ebank.sqlite')
