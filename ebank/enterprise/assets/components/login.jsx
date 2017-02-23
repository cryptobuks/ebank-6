import React from "react";
import {Link, withRouter} from "react-router";
import api from "../modules/api";

export default withRouter(class Login extends React.Component {
  constructor() {
    super()
    this.data = {}
    this.handleInput = this.handleInput.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(event) {
    api.login(this.data.account, this.data.password).then(() => {
      alert('登录成功')
      location.href = '/'
    }).catch(error => {
      alert(error.message)
    })
    event.preventDefault()
  }

  handleInput(event) {
    this.data[event.target.id] = event.target.value
  }

  render() {
    return <form className='col-lg-4 col-lg-offset-4' onSubmit={this.submit}>
      <div className='page-header'>
        <h1>易伴金融</h1>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <label className='input-group-addon' htmlFor='account'>
            <span className='glyphicon glyphicon-user'/>
          </label>
          <input
            type='text'
            className='form-control'
            id='account'
            placeholder='账号，或手机号码'
            onChange={this.handleInput}/>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <label className='input-group-addon' htmlFor='password'>
            <span className='glyphicon glyphicon-lock'/>
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='密码'
            onChange={this.handleInput}/>
        </div>
      </div>
      <div className='form-group'>
        <button className='btn btn-block btn-primary'>登录</button>
      </div>
      <div className='form-group text-center'>
        <Link to='/'>忘记密码？</Link>&nbsp;&nbsp;
        <Link to='/register'>注册新账号</Link>
      </div>
    </form>
  }
})
