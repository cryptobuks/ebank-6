from . import sqlalchemy


class FinancialProductItem(sqlalchemy.Model):
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    name = sqlalchemy.Column(sqlalchemy.String(100))
    purchase_amount = sqlalchemy.Column(sqlalchemy.Integer)
    expected_earnings = sqlalchemy.Column(sqlalchemy.String(100))
    deadline = sqlalchemy.Column(sqlalchemy.String(100))
    group_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey('financial_product_group.id'))
    rate = sqlalchemy.Column(sqlalchemy.Float)
