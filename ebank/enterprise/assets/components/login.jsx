import React from 'react'

export default class Login extends React.Component {
  render() {
    return <form className="col-lg-4 col-lg-offset-4">
      <div className="page-header">
        <h1>eBank</h1>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label className="input-group-addon" htmlFor="user">
            <span className="glyphicon glyphicon-user"/>
          </label>
          <input type="text" className="form-control" id="user" placeholder="用户名"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label className="input-group-addon" htmlFor="password">
            <span className="glyphicon glyphicon-lock"/>
          </label>
          <input type="text" className="form-control" id="password" placeholder="密码"/>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-block btn-primary">登录</button>
      </div>
      <div className="form-group text-center">
        <a href="#">忘记密码？</a>&nbsp;&nbsp;
        <a href="#"> 注册新账号</a>
      </div>
    </form>
  }
}
