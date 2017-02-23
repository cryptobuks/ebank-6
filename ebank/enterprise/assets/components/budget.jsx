import React from 'react'
import ReactDataGrid from 'react-data-grid'
import update from 'immutability-helper'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import Base from './base'
import api from '../modules/api'
const moment = require('moment')

class Formatter extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    this.add = this.add.bind(this)
    this.update = this.update.bind(this)
    this.data = {}
  }

  componentWillReceiveProps(props) {
    this.setState({list: props.value.list})
  }

  add() {
    const data = Object.assign({}, this.data)
    data.value = parseFloat(data.value)
    this.state.list = update(this.state.list, {$push: [data]})
    this.setState({list: this.state.list})
    this.props.value.update(this.state.list)
  }

  remove(i) {
    this.state.list = update(this.state.list, {$splice: [[i, 1]]})
    this.setState({list: this.state.list})
    this.props.value.update(this.state.list)
  }

  update(event) {
    this.data[event.target.name] = event.target.value
  }

  render() {
    return <OverlayTrigger trigger='click' placement='bottom' overlay={
      <Popover id='popover-flow-detail'>
        <table className='table'>
          <thead>
          <tr>
            <th>标题</th>
            <th>金额</th>
            <th className='text-center'>操作</th>
          </tr>
          </thead>
          <tbody>
          {this.state.list.map((item, i) => <tr key={i}>
            <td>{item.title}</td>
            <td>{item.value}</td>
            <td className='text-center'>
              <a className='text-danger glyphicon glyphicon-remove' onClick={this.remove.bind(this, i)}/>
            </td>
          </tr>)}
          <tr>
            <td>
              <input
                type='text'
                className='form-control input-sm'
                name='title'
                onChange={this.update}/>
            </td>
            <td>
              <input
                type='number'
                className='form-control input-sm'
                name='value'
                onChange={this.update}/>
            </td>
            <td>
              <a className='btn btn-primary btn-sm' onClick={this.add}>添加</a>
            </td>
          </tr>
          </tbody>
        </table>
      </Popover>}>
      <a href='javascript:'>查看({this.props.value ? this.props.value.list.length : 0})</a>
    </OverlayTrigger>
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
    this.upload = this.upload.bind(this)
  }

  componentDidMount() {
    api.fetchBudgetTable().then((data) => {
      if (data) {
        this.setState({rows: data})
      } else {
        this.createBudgetTable()
      }
    }).catch(() => {
      this.createBudgetTable()
    })
  }

  createBudgetTable() {
    for (let i = 1; i <= 24; i += 1) {
      this.state.rows.push({
        code: moment().add(i, 'month').format('YYYYMM'),
        month: moment().add(i, 'month').format('YYYY-MM'),
        starting_balance: 0,
        ending_balance: 0,
        inflow: {list: [], update: (data) => {
          this.state.rows[i - 1].inflow.list = data
          this.state.rows[i - 1].total_inflow = data.reduce((total, item) => {
            total += item.value
            return total
          }, 0)
          this.updateTable(i - 1)
        }},
        total_inflow: 0,
        outflow: {list: [], update: (data) => {
          this.state.rows[i - 1].outflow.list = data
          this.state.rows[i - 1].total_outflow = data.reduce((total, item) => {
            total += item.value
            return total
          }, 0)
          this.updateTable(i - 1)
        }},
        total_outflow: 0,
      })
    }
    this.setState({rows: this.state.rows})
  }

  updateTable(index) {
    const row = this.state.rows[index]
    row.ending_balance = row.starting_balance + row.total_inflow - row.total_outflow
    let balance = row.ending_balance
    const updater = {}
    for (let i = index + 1; i < this.state.rows.length; i += 1) {
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

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    if (updated.starting_balance) {
      const rows = {}
      const row = this.state.rows[fromRow]
      row.starting_balance = parseFloat(updated.starting_balance)
      this.updateTable(fromRow)
    }
  }

  upload() {
    api.uploadBudgetTable(this.state.rows)
  }

  render() {
    return <Base>
      <div className='clearfix'>
        <h2 className='pull-left module-title'>预算表</h2>
        <button className='btn btn-primary pull-right' onClick={this.upload}>
          <span className='glyphicon glyphicon-save'/> 保存
        </button>
      </div>
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={this.state.rows.length}
        onGridRowsUpdated={this.handleGridRowsUpdated.bind(this)}
        minHeight={innerHeight - 180} />
    </Base>
  }
}