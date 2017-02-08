import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import UserInfo from './components/user-info'
import Login from './components/login'
import 'bootstrap/dist/css/bootstrap'
import './style'

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={UserInfo}/>
    <Route path="/login" component={Login}/>
  </Router>
  , document.getElementById('main'))