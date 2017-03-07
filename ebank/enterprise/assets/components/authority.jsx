import React from 'react'

export default class Authority extends React.Component {
  render() {
    return <div>
      <table className='table'>
        <thead>
        <tr>
          <th>操作员ID</th>
          <th>角色</th>
          <th>权限</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>YB001</td>
          <td>管理员</td>
          <td>查看、报告生成、报告到处、ID管理</td>
          <td>
            <a className='text-warning' href='#'>编辑</a>&nbsp;&nbsp;
            <a className='text-danger' href='#'>删除</a>
          </td>
        </tr>
        <tr>
          <td>YB002</td>
          <td>操作</td>
          <td>查看、报告生成</td>
          <td>
            <a className='text-warning' href='#'>编辑</a>&nbsp;&nbsp;
            <a className='text-danger' href='#'>删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  }
}