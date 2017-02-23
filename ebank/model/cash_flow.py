from . import sqlalchemy


class CashFlow(sqlalchemy.Model):
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    type = sqlalchemy.Column(sqlalchemy.Integer, nullable=False)
    time = sqlalchemy.Column(sqlalchemy.DateTime, nullable=False)
    title = sqlalchemy.Column(sqlalchemy.String(100), nullable=False)
    value = sqlalchemy.Column(sqlalchemy.Float, nullable=False)
    monthly_budget_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey('monthly_budget.id'))
