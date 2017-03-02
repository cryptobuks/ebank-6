from . import sqlalchemy


class FinancialProductGroup(sqlalchemy.Model):
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    name = sqlalchemy.Column(sqlalchemy.String(100), nullable=False)
    provider = sqlalchemy.Column(sqlalchemy.String(100))
    detail = sqlalchemy.Column(sqlalchemy.Text)
