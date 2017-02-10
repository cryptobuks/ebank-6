from . import sqlalchemy


class Enterprise(sqlalchemy.Model):
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    account = sqlalchemy.Column(sqlalchemy.String(100), nullable=False, unique=True)
    password = sqlalchemy.Column(sqlalchemy.String(100), nullable=False)
    contacts_name = sqlalchemy.Column(sqlalchemy.String(100), nullable=False)
    contacts_mobile = sqlalchemy.Column(sqlalchemy.String(100), nullable=False, unique=True)
    business_id = sqlalchemy.Column(sqlalchemy.String(100), nullable=False, unique=True)
    business_name = sqlalchemy.Column(sqlalchemy.String(100), nullable=False, unique=True)
