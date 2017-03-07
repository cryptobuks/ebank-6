import React from 'react'
import {Link, withRouter} from 'react-router'

export default withRouter(class SideNav extends React.Component {
  constructor() {
    super()
    this.state = {
      height: innerHeight - 102
    }
    this.menu = [
      {
        name: '客户资料',
        path: '/',
        icon: 'user',
      },
      {
        name: '在线出纳',
        path: '/cash_management',
        icon: 'calendar',
      },
      {
        name: '预算管理',
        path: '/budget',
        icon: 'envelope',
      },
      {
        name: '理财计划',
        path: '/plan',
        icon: 'tasks',
      },
      {
        name: '贷款融资',
        path: '/loan',
        icon: 'magnet',
      },
    ]
  }

  render() {
    return <ul className='nav nav-stacked nav-side' style={{height: this.state.height}}>
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
