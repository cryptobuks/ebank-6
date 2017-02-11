import React from 'react'
import Base from './base'

export default class UserInfo extends React.Component {
  render() {
    let user = window.user || {}
    return <Base>
      <h3 className='page-header'>基本信息</h3>
      <dl className='dl-horizontal'>
        <dt>企业名称</dt>
        <dd>{user.business_name}</dd>
        <dt>营业执照号码</dt>
        <dd>{user.business_id}</dd>
      </dl>
      <br/>
      <h3 className='page-header'>联系人</h3>
      <dl className='dl-horizontal'>
        <dt>名字</dt>
        <dd>{user.contacts_name}</dd>
        <dt>号码</dt>
        <dd>{user.contacts_mobile}</dd>
      </dl>
    </Base>
  }
}