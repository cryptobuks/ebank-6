import React from 'react'
import {Link} from 'react-router'
import Base from './base'

export default class UserInfo extends React.Component {
  render() {
    let user = window.user || {}
    return <div>
      <div className='panel panel-default'>
        <div className='panel-body'>
          <dl className='dl-horizontal col-lg-6'>
            <dt>企业名称</dt>
            <dd>{user.business_name}</dd>
            <dt>所在城市</dt>
            <dd>北京</dd>
            <dt>主营业务</dt>
            <dd>互联网</dd>
            <dt>融资轮次</dt>
            <dd>A轮</dd>
          </dl>
          <dl className='dl-horizontal col-lg-6'>
            <dt>营业执照号码</dt>
            <dd>{user.business_id}</dd>
            <dt>行业类别</dt>
            <dd>互联网</dd>
            <dt>法定代表人</dt>
            <dd>{user.contact_name}</dd>
          </dl>
        </div>
      </div>
    </div>
  }
}