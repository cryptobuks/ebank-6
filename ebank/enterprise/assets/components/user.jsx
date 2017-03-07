import React from 'react'
import {Link} from 'react-router'

export default class User extends React.Component {
  constructor() {
    super()
    this.menu = [
      {
        name: '企业信息',
        path: 'info',
      },
      {
        name: '权限操作',
        path: 'authority',
      },
      {
        name: '报告管理',
        path: 'report',
      },
      {
        name: '企业福利',
        path: 'welfare',
      },
    ]
  }

  render() {
    let user = window.user || {}
    return <div>
      <ul className="nav nav-pills">
        {this.menu.map((item) =>
          <li className={item.path == this.props.router.routes[2].path ? 'active' : ''} key={item.name}>
            <Link to={'/user/' + item.path}>{item.name}</Link>
          </li>
        )}
      </ul>
      <br/>
      <div>
        {this.props.children}
      </div>
    </div>
  }
}