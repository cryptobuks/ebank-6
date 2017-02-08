import React from 'react'

export default class SideNav extends React.Component {
  render() {
    return <ul className="nav nav-pills nav-stacked text-center">
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-credit-card"/> 用户资料
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-th-list"/> 预算报告
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-tasks"/> 现金管理
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-shopping-cart"/> 金融超市
        </a>
      </li>
    </ul>
  }
}
