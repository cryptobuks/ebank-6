import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import UserInfo from './user-info'
import BudgetReport from './budget_report'
import CashManagement from './cash_management'
import Market from './market'
import Login from './login'
import Register from './register'
import Loan from './loan'
import Integral from './integral'

export default class Main extends React.Component {
  render() {
    return <Router history={hashHistory}>
      <Route path='/' component={UserInfo}/>
      <Route path='/budget_report' component={BudgetReport}/>
      <Route path='/cash_management' component={CashManagement}/>
      <Route path='/market' component={Market}/>
      <Route path='/loan' component={Loan}/>
      <Route path='/integral' component={Integral}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Router>
  }
}
