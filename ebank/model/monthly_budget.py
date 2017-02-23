from . import sqlalchemy


class MonthlyBudget(sqlalchemy.Model):
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    code = sqlalchemy.Column(sqlalchemy.Integer, nullable=False)
    starting_balance = sqlalchemy.Column(sqlalchemy.Float, nullable=False)
    ending_balance = sqlalchemy.Column(sqlalchemy.Float, nullable=False)
    inflow = sqlalchemy.Column(sqlalchemy.Float, default=0)
    outflow = sqlalchemy.Column(sqlalchemy.Float, default=0)
    enterprise_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey('enterprise.id'))
    enterprise = sqlalchemy.relationship('Enterprise', backref=sqlalchemy.backref('budget_monthly', lazy='dynamic'))
