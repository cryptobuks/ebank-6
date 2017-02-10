import React from 'react'
import {withRouter} from 'react-router'
import Header from './header'
import SideNav from './side-nav'

export default withRouter(class Base extends React.Component {
  componentDidMount() {
    if (!window.user) {
      this.props.router.replace('/login')
    }
  }

  render() {
    return <div>
      <Header/>
      <div className="container">
        <div className="col-lg-2">
          <SideNav/>
        </div>
        <div className="col-lg-10">
          {this.props.children}
        </div>
      </div>
    </div>
  }
})
