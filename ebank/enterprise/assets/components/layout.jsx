import React from 'react'
import Header from './header'
import SideNav from './sidenav'

export default class Layout extends React.Component {
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
}
