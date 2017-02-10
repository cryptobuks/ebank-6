import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import UserInfo from './user-info'
import Login from './login'
import Register from './register'

export default class Main extends React.Component {
  render() {
    return <Router history={hashHistory}>
      <Route path='/' component={UserInfo}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Router>
  }
}
