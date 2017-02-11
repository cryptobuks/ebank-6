import React from 'react'
import {Link, withRouter} from 'react-router'

export default withRouter(class SideNav extends React.Component {
  constructor() {
    super()
    this.menu = [
      {
        name: '用户资料',
        path: '/',
        icon: 'credit-card',
      },
      {
        name: '预算报告',
        path: '/budget_report',
        icon: 'th-list',
      },
      {
        name: '现金管理',
        path: '/cash_management',
        icon: 'tasks',
      },
      {
        name: '金融超市',
        path: '/market',
        icon: 'shopping-cart',
      },
    ]
  }

  render() {
    return <ul className="nav nav-pills nav-stacked text-center">
      {this.menu.map((item) =>
        <li className={item.path == this.props.router.routes[0].path ? 'active' : ''} key={item.name}>
          <Link to={item.path}>
            <span className={'glyphicon glyphicon-' + item.icon}/> {item.name}
          </Link>
        </li>
      )}
    </ul>
  }
})
