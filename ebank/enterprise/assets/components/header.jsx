import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {
  render() {
    let user = window.user || {}
    return <div className='navbar navbar-static-top navbar-ebank'>
      <div className='container'>
        <div className='navbar-header'>
          <a href='#' className='navbar-brand'>
            <img className='logo' src={require('../images/logo.jpg')} alt='EBank'/>
            <img className='slogan' src={require('../images/slogan.png')} alt='携手相伴，创造更有价值的未来'/>
          </a>
        </div>
        <ul className='nav navbar-nav navbar-right'>
          <li><a className='welcome'>{user.account}客户您好</a></li>
          <li><Link to='/cash_management'>在线出纳</Link></li>
          <li><Link to='/budget'>预算管理</Link></li>
          <li><Link to='/plan'>理财计划</Link></li>
          <li><Link to='/loan'>贷款融资</Link></li>
          <li><a href='#'>修改密码</a></li>
          <li><a href='/logout'>退出登录</a></li>
        </ul>
      </div>
    </div>
  }
}
