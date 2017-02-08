import React from 'react'

export default class Header extends React.Component {
  render() {
    return <div className="navbar navbar-static-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">eBank</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">退出登录</a></li>
          <li><a href="#">修改密码</a></li>
        </ul>
      </div>
    </div>
  }
}
