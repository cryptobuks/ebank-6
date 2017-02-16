import React from 'react'
import {Link, withRouter} from 'react-router'

export default withRouter(class SideNav extends React.Component {
  constructor() {
    super()
    this.menu = [
      {
        name: '用户资料',
        path: '/',
      },
      {
        name: '预算报告',
        path: '/budget_report',
      },
      {
        name: '现金管理',
        path: '/cash_management',
      },
      {
        name: '金融超市',
        path: '/market',
      },
      {
        name: '借贷融资',
        path: '/loan',
      },
      {
        name: '积分商城',
        path: '/integral',
      },
    ]
  }

  render() {
    return <ul className='nav nav-pills nav-stacked text-center'>
      {this.menu.map((item) =>
        <li className={item.path == this.props.router.routes[0].path ? 'active' : ''} key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      )}
    </ul>
  }
})
