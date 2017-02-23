import React from 'react'
import ReactDataGrid from 'react-data-grid'
import update from 'immutability-helper'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import Base from './base'
const moment = require('moment')

class Formatter extends React.Component {
  render() {
    const list = this.props.value.list || []
    return <div className='inflow-detail'>
      <OverlayTrigger trigger='click' overlay={
        <Popover id='popover-positioned-top'>
          <table className='table'>
            <thead>
            <tr>
              <th>标题</th>
              <th>金额</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {list.map((item, i) => <tr key={i}>
              <td>{item.title}</td>
              <td>{item.value}</td>
              <td>
                <a href='javascript:' className='text-danger'>删除</a>
              </td>
            </tr>)}
            <tr>
              <td><input type='text' className='form-control input-sm'/></td>
              <td><input type='number' className='form-control input-sm'/></td>
              <td><a href='javascript:'>添加</a></td>
            </tr>
            </tbody>
          </table>
        </Popover>}>
        <a href='javascript:'>查看</a>
      </OverlayTrigger>
    </div>
  }
}

export default class Budget extends React.Component {
  constructor() {
    super()
    this.state = {
      rows: [],
    }
    this.columns = [
      {
        key: 'month',
        name: '月份',
      },
      {
        key: 'starting_balance',
        name: '期初余额',
        editable: true,
      },
      {
        key: 'inflow',
        name: '收入明细',
        formatter: Formatter,
      },
      {
        key: 'total_inflow',
        name: '总收入',
      },
      {
        key: 'outflow',
        name: '支出明细',
        formatter: Formatter,
      },
      {
        key: 'total_outflow',
        name: '总支出',
      },
      {
        key: 'ending_balance',
        name: '期末余额',
      },
    ]
    this.create()
  }

  create() {
    for (let i = 1; i <= 24; i += 1) {
      this.state.rows.push({
        code: moment().add(i, 'month').format('YYYYMM'),
        month: moment().add(i, 'month').format('YYYY-MM'),
        starting_balance: 0,
        ending_balance: 0,
        inflow: {list: [{title: '利息', value: 12}]},
        total_inflow: 0,
        outflow: {list: [{title: '利息', value: 12}]},
        total_outflow: 0,
      })
    }
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    if (updated.starting_balance) {
      const rows = {}
      const row = this.state.rows[fromRow]
      row.starting_balance = parseFloat(updated.starting_balance)
      row.ending_balance = row.starting_balance + row.total_inflow - row.total_outflow
      let balance = row.ending_balance
      let updater = {}
      for (let i = fromRow + 1; i < this.state.rows.length; i += 1) {
        const row = this.state.rows[i]
        updater[i] = {
          starting_balance: {$set: balance},
          ending_balance: {$set: balance + row.total_inflow - row.total_outflow},
        }
        balance = updater[i].ending_balance.$set
      }
      setTimeout(() => {
        this.setState({rows: update(this.state.rows, updater)})
      }, 0)
    }
  }

  render() {
    return <Base>
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={this.state.rows.length}
        onGridRowsUpdated={this.handleGridRowsUpdated.bind(this)}
        minHeight={500} />
    </Base>
  }
}