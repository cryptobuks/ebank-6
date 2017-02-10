import React from 'react'
import {Link} from 'react-router'
import api from '../modules/api'

export default class Register extends React.Component {
  constructor() {
    super()
    this.defaultText = '获取验证码'
    this.state = {
      buttonText: this.defaultText,
    }
    this.data = {}
    this.submit = this.submit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.getVerificationCode = this.getVerificationCode.bind(this)
  }

  submit(event) {
    api.register(this.data).then(state => {
      api.login(this.data['contacts-mobile'], this.data['password'])
    }).catch(error => {
      alert(error.message)
    })
    event.preventDefault()
  }

  handleInput(event) {
    this.data[event.target.name] = event.target.value
  }

  startWaiting(time) {
    if (time == 0) {
      this.setState({buttonText: this.defaultText})
    } else {
      this.setState({buttonText: `等待${time}秒`})
      setTimeout(this.startWaiting.bind(this, time - 1), 1000)
    }
  }

  getVerificationCode() {
    let mobile = this.data['contacts-mobile']
    if (mobile && mobile.length == 11) {
      api.getVerificationCode(mobile).then(state => {
        this.startWaiting(60)
      })
    } else {
      alert('请输入正确的手机号码')
    }
  }

  render() {
    return <form className='col-lg-4 col-lg-offset-4' onSubmit={this.submit.bind(this)}>
      <div className='page-header'>
        <h1>eBank</h1>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='企业名称，与工商营业执照名一致，注意括号的半角全角'
          onChange={this.handleInput}
          type='text' name='business-name' required/>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='工商营业执照号码'
          onChange={this.handleInput}
          type='text' name='business-id' required/>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='联系人名称'
          onChange={this.handleInput}
          type='text' name='contacts-name' required/>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <input
            className='form-control'
            placeholder='联系人手机号码'
            onChange={this.handleInput}
            type='number' name='contacts-mobile' required/>
          <span className='input-group-btn'>
            <button
              disabled={this.state.buttonText != this.defaultText}
              className='btn btn-default'
              onClick={this.getVerificationCode}
              type='button'>{this.state.buttonText}</button>
          </span>
        </div>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='手机短信验证码'
          onChange={this.handleInput}
          type='number' name='verification-code' required/>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='账号，用于登录'
          onChange={this.handleInput}
          type='text' name='account' required/>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='密码'
          onChange={this.handleInput}
          type='password' name='password' required/>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='确认密码'
          onChange={this.handleInput}
          type='password' name='password-again' required/>
      </div>
      <div className='form-group'>
        <button className='btn btn-block btn-primary'>注册</button>
      </div>
      <div className='form-group text-center'>
        已注册？<Link to='/login'>点击登录</Link>
      </div>
    </form>
  }
}
