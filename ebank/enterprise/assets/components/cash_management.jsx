import React from 'react'
import Base from './base'

export default class CashManagement extends React.Component {
  render() {
    return <div>
      <h3 className="module-title">指令清单</h3>
      <table className="table">
        <thead>
        <tr>
          <th>指令编号</th>
          <th>内容</th>
          <th>发出人</th>
          <th>发出时间</th>
          <th>更新时间</th>
          <th>当前负责人</th>
          <th>当前状态</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>CNN001</td>
          <td>xxxxxxxxxx</td>
          <td>A</td>
          <td>2017-03-01 08:00</td>
          <td>2017-03-01 09:00</td>
          <td>经办</td>
          <td>操作中</td>
        </tr>
        <tr>
          <td>CNN002</td>
          <td>xxxxxxxxxx</td>
          <td>B</td>
          <td>2017-03-01 08:00</td>
          <td>2017-03-01 09:00</td>
          <td>复核</td>
          <td>操作中</td>
        </tr>
        </tbody>
      </table>
      <h3>指令流程</h3>
      <div className="row text-center">
        <div className="col-lg-2">
          <div className="well">步骤一</div>
        </div>
        <div className="col-lg-2">
          <div className="well">步骤二</div>
        </div>
        <div className="col-lg-2">
          <div className="well">步骤二</div>
        </div>
        <div className="col-lg-2">
          <div className="well">步骤四</div>
        </div>
        <div className="col-lg-2">
          <div className="well">步骤五</div>
        </div>
        <div className="col-lg-2">
          <div className="well">步骤六</div>
        </div>
      </div>
    </div>
  }
}