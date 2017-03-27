import React from 'react'
import Base from './base'

export default class BudgetManage extends React.Component {
    render() {
        return <div>
            <h3 className="module-title">现金预算报告模板</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>模板</th>
                    <th>名称</th>
                    <th>企业类别</th>
                    <th>期限</th>
                    <th>预览</th>
                    <th>打印</th>
                    <th>分享</th>
                    <th>调用</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>模板1</td>
                    <td>名称</td>
                    <td>企业类别</td>
                    <td>期限</td>
                    <td>预览</td>
                    <td>打印</td>
                    <td>分享</td>
                    <td>调用</td>
                </tr>

                <tr>
                    <td>模板2</td>
                    <td>名称</td>
                    <td>企业类别</td>
                    <td>期限</td>
                    <td>预览</td>
                    <td>打印</td>
                    <td>分享</td>
                    <td>调用</td>
                </tr>

                <tr>
                    <td>模板3</td>
                    <td>名称</td>
                    <td>企业类别</td>
                    <td>期限</td>
                    <td>预览</td>
                    <td>打印</td>
                    <td>分享</td>
                    <td>调用</td>
                </tr>

                <tr>
                    <td>模板4</td>
                    <td>名称</td>
                    <td>企业类别</td>
                    <td>期限</td>
                    <td>预览</td>
                    <td>打印</td>
                    <td>分享</td>
                    <td>调用</td>
                </tr>

                <tr>
                    <td>模板5</td>
                    <td>名称</td>
                    <td>企业类别</td>
                    <td>期限</td>
                    <td>预览</td>
                    <td>打印</td>
                    <td>分享</td>
                    <td>调用</td>
                </tr>

                <tr>
                    <td>模板6</td>
                    <td>名称</td>
                    <td>企业类别</td>
                    <td>期限</td>
                    <td>预览</td>
                    <td>打印</td>
                    <td>分享</td>
                    <td>调用</td>
                </tr>

                </tbody>

            </table>

            <h3 className="module-title">我要做现金预算报告</h3>

            <table className="table">
                <tbody>

                <tr>
                    <td>参数1-1</td>
                    <td>比如期初余额</td>
                    <td>参数1-2</td>
                    <td>比如期末余额</td>
                </tr>

                <tr>
                    <td>参数2-1</td>
                    <td>比如支出1</td>
                    <td>参数2-2</td>
                    <td>比如支出2</td>
                </tr>

                <tr>
                    <td>参数3-1</td>
                    <td>比如收入1</td>
                    <td>参数3-2</td>
                    <td>比如收入2</td>
                </tr>
                </tbody>

            </table>

            <h3>报告预览区</h3>


            <table>

                <thead>
                <tr>
                    <th>" "</th>
                    <th>第1期间</th>
                    <th>第2期间</th>
                    <th>第3期间</th>
                    <th>第4期间</th>
                    <th>第5期间</th>
                    <th>第6期间</th>
                </tr>

                </thead>
                <tbody>

                <tr>
                    <td>期初余额</td>
                </tr>

                <tr>
                    <td>支出1</td>
                </tr>

                <tr>
                    <td>支出2</td>
                </tr>

                <tr>
                    <td>支出3</td>
                </tr>

                <tr>
                    <td>支出合计</td>
                </tr>

                <tr>
                    <td>收入1</td>
                </tr>

                <tr>
                    <td>收入2</td>
                </tr>

                <tr>
                    <td>收入3</td>
                </tr>

                <tr>
                    <td>收入合计</td>
                </tr>

                <tr>
                    <td>期末余额</td>
                </tr>




                </tbody>

            </table>

            <h3>更精细的预算需求</h3>

            <table>
                <thead>
                <tr>
                    <th>编号1</th>
                    <th>A类预算</th>
                    <th>编号2</th>
                    <th>B类预算</th>
                    <th>编号3</th>
                    <th>C类预算</th>
                </tr>
                </thead>
            </table>

            </div>
    }
}