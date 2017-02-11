import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {
  render() {
    let user = window.user || {}
    return <div className='navbar navbar-static-top navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <a href='#' className='navbar-brand'>eBank</a>
        </div>
        <ul className='nav navbar-nav navbar-right'>
          <li><a className='welcome'>{user.account}客户您好</a></li>
          <li><Link to='/budget_report'>预算报告</Link></li>
          <li><Link to='/cash_management'>现金管理</Link></li>
          <li><a href='#'>修改密码</a></li>
          <li><a href='/logout'>退出登录</a></li>
        </ul>
      </div>
    </div>
  }
}
