import React from 'react'
import {Link} from 'react-router'
import Base from './base'

export default class UserReport extends React.Component {
  render() {
    let user = window.user || {}
    return <div>
      <div className="panel panel-default">
        <div className="panel-heading">现金管理分析</div>
        <div className="panel-body">
          <table className="table">
            <thead>
            <tr>
              <th>报告编号</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>ZJ001</td>
              <td>2017-03</td>
              <td>
                <a href="#">查看</a> <a href="#">打印</a> <a href="#">删除</a> <a href="#">导出</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">预算报告</div>
        <div className="panel-body">
          <table className="table">
            <thead>
            <tr>
              <th>报告编号</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>ZJ001</td>
              <td>2017-03</td>
              <td>
                <a href="#">查看</a> <a href="#">打印</a> <a href="#">删除</a> <a href="#">导出</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">理财配置</div>
        <div className="panel-body">
          <table className="table">
            <thead>
            <tr>
              <th>报告编号</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>ZJ001</td>
              <td>2017-03</td>
              <td>
                <a href="#">查看</a> <a href="#">打印</a> <a href="#">删除</a> <a href="#">导出</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
}