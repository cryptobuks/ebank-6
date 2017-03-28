import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import Base from './base'
import User from './user'
import UserInfo from './user-info'
import UserReport from './user-report'
import UserWelfare from './user-welfare'
import Budget from './budget'
import CashManagement from './cash_management'
import Market from './market'
import Login from './login'
import Register from './register'
import Loan from './loan'
import Plan from './plan'
import Authority from './authority'

export default class Main extends React.Component {
  render() {
    return <Router history={hashHistory}>
      <Redirect from='/' to='/user'/>
      <Redirect from='/user' to='/user/info'/>
      <Route path='/' component={Base}>
        <Route path='user' component={User}>
          <Route path='info' component={UserInfo}/>
          <Route path='authority' component={Authority}/>
          <Route path='report' component={UserReport}/>
          <Route path='welfare' component={UserWelfare}/>
        </Route>
        <Route path='budget' component={Budget}/>
        <Route path='budget_manage' component="{BudgetManage}"/>
        <Route path='cash_management' component={CashManagement}/>
        <Route path='market' component={Market}/>
        <Route path='loan' component={Loan}/>
        <Route path='plan' component={Plan}/>
      </Route>
      <Route path='login' component={Login}/>
      <Route path='register' component={Register}/>
    </Router>
  }
}
