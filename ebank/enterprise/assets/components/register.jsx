import React from 'react'
import {Link} from 'react-router'

export default class Register extends React.Component {
  render() {
    return <form className='col-lg-4 col-lg-offset-4'>
      <div className='page-header'>
        <h1>eBank</h1>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='enterprise-name' placeholder='企业名称，与工商营业执照名一致，注意括号的半角全角'/>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='enterprise-id' placeholder='工商营业执照号码'/>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='contacts-name' placeholder='联系人名称'/>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <input type='number' className='form-control' id='contacts-mobile' placeholder='联系人手机号码'/>
          <span className='input-group-btn'>
            <button className='btn btn-default' type='button'>获取验证码</button>
          </span>
        </div>
      </div>
      <div className='form-group'>
        <input type='number' className='form-control' id='verification-code' placeholder='手机短信验证码'/>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='account' placeholder='账号，用于登录'/>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='password' placeholder='密码'/>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='password-again' placeholder='确认密码'/>
      </div>
      <div className='form-group'>
        <button className='btn btn-block btn-primary'>登录</button>
      </div>
      <div className='form-group text-center'>
        已注册？<Link to='/login'>点击登录</Link>
      </div>
    </form>
  }
}
