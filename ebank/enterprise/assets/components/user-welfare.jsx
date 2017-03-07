import React from 'react'
import {Link} from 'react-router'
import Base from './base'

export default class UserWelfare extends React.Component {
  render() {
    return <div>
      <table className='table'>
        <thead>
        <tr>
          <th>优惠券</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>XXXXXXXXXXX</td>
          <td>有效</td>
        </tr>
        <tr>
          <td>XXXXXXXXXXX</td>
          <td>失效</td>
        </tr>
        </tbody>
      </table>
    </div>
  }
}