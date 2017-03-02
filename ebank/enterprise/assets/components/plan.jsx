import React from "react";
import Base from "./base";
import {Tabs, Tab} from "react-bootstrap";

export default class Plan extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [{
        'name': '易招财',
        'description': '由知名股份制商业银行与易后台合作推出的企业版互联网金融增值产品',
        'detail': '<p>【1】10+倍活期利率；</p><p>【2】直接投入银行资产，安全无忧；</p><p>【3】1千元起投，24小时开放，充值、提现皆为T+1日到账，充值7天后可以提现，充值后无需购买自动产生收益。</p>',
        'items': [{'purchase_amount': 1000, 'expected_earnings': '年化3%~3.2%', 'deadline': '无固定期限'}]
      }, {
        'name': '驭能宝',
        'description': '易后台客户尊享安全高收益光伏融资租赁产品',
        'detail': '<p>【1】除固定收益外，投资人还将获得平台募集期内贴息补贴。平台承诺按月付息，到期还本；</p><p>【2】承租人信息透明：恒顺醋业光伏电站1期2.12MV项目，募资用于新建光伏电站建设；</p><p>【3】电站发电数据公开：驭能者24小时远程运维，发电量官网实时更新，视频实时监控；</p><p>【4】还款来源安全可靠：恒顺醋业缴纳电费+国家电网售电所得+国家0.42元/度电补贴；</p><p>【5】按天计息，按月付息：平台每月23日向投资人支付上月利息，到期后返回本金；</p><p>【6】阳光理财保护环境：电站每年发电相当于少用763吨标准煤，相当于植树30万棵。</p>',
        'items': [{'purchase_amount': 2296, 'expected_earnings': '5.10%', 'deadline': '3个月'}, {
          'purchase_amount': 2296,
          'expected_earnings': '5.60%',
          'deadline': '4个月'
        }, {'purchase_amount': 2296, 'expected_earnings': '6.50%', 'deadline': '6个月'}, {
          'purchase_amount': 2296,
          'expected_earnings': '8.00%',
          'deadline': '12个月'
        }]
      }, {
        'name': '企明星',
        'description': '中子星优财为易后台客户量身打造的企业现金管理产品',
        'detail': '<p>【1】日日复利，15+倍活期利率；</p><p>【2】收益主要来自资管产品的优先级、银行定制的优质资产包以及货币基金；</p><p>【3】资金由新浪托管，每日公布昨日收益，安全无忧；</p><p>【4】首次100万起投，10万递增，T+1日计息，随存随取，盘活企业的现金资产。</p>',
        'items': [{'purchase_amount': 1000, 'expected_earnings': '年化5.18%', 'deadline': '无固定期限'}]
      }, {
        'name': '企鑫宝',
        'description': '由欧巴金融平台提供的企业现金管理产品',
        'detail': '<p>【1】日日复利，10+倍活期利率；</p><p>【2】挂钩专业金融机构发行资管计划，直投银行资产，安全无忧；</p><p>【3】资金有银行托管，每日公布昨日收益，赚钱绝不含糊；</p><p>【4】1万元起投，24小时开放，T+2日赎回到账，提供预约投资/赎回服务，现金管理一劳永逸。</p>',
        'items': [{'purchase_amount': 10000, 'expected_earnings': '年化4%', 'deadline': '无固定期限'}]
      }, {
        'name': '存多多',
        'description': '中小企业现金管理的最佳选择',
        'detail': '<p>【1】银行级安全资产，华夏基金为唯一基金管理人；</p><p>【2】最高流动性，T+1赎回无限额；</p><p>【3】更好的用户体验，手机APP端可随时随地可进行资金操作。</p>',
        'items': [{'purchase_amount': 1, 'expected_earnings': '年化3.4%~3.6%', 'deadline': '随存随取'}]
      }, {
        'name': '企额宝',
        'description': '为易后台客户打造符合差异化理财需求与风控合规标准的专业现金管理产品',
        'detail': '<p>【1】除固定收益外，还可能获得灵活的额外收益；</p><p>【2】资金由兴业银行全程托管，产品100%分散投资于AA、AA+级及以上评级的高评级优质债券；</p><p>【3】债券二级市场交易活跃，随时可抛售；</p><p>【4】现无需客户承担管理费、托管费和投资顾问费。</p>',
        'items': [{
          'purchase_amount': 1000,
          'expected_earnings': '固定年化5.5%+灵活收益',
          'deadline': '3个月'
        }, {'purchase_amount': 1000, 'expected_earnings': '固定年化6.5%+灵活收益', 'deadline': '6个月'}, {
          'purchase_amount': 1000,
          'expected_earnings': '固定年化7.5%+灵活收益',
          'deadline': '12个月'
        }, {'purchase_amount': 1000, 'expected_earnings': '固定年化8%+灵活收益', 'deadline': '18个月'}]
      }, {
        'name': '企盈宝',
        'description': '由金桔财富为易后台用户专属开发的企业版互联网理财产品',
        'detail': '<p>【1】超过银行15倍活期利率，企业理财的不二选择；</p><p>【2】活期产品1元起投，T+1日计息，灵活存取，无坏账，无延期；</p><p>【3】资金由银行托管，每日公布收益，微信实时掌控盈利状况；</p><p>【4】定期类产品1万元起投，无坏账，无延期；</p><p>【5】底层资产媲美银行理财，大型金融机构全额担保。</p>',
        'items': [{'purchase_amount': 1, 'expected_earnings': '6%', 'deadline': '无固定期限'}, {
          'purchase_amount': 10000,
          'expected_earnings': '7%',
          'deadline': '90天'
        }]
      }, {
        'name': '铂诺安盈系列',
        'description': '由铂诺理财为易后台客户推出的企业版私人银行级现金管理方案',
        'detail': '<p>【1】私人银行级金融资产作质押物，确保资产优质属性；</p><p>【2】设置质押资产安全垫，100%保证本金及收益；</p><p>【3】资金通过新浪支付在银行托管，确保万无一失；</p><p>【4】创新工场李开复老师投资企业，优质信用背书；</p><p>【5】优质用户体验，针对企业版用户提供VIP专属客户服务。</p>',
        'items': [{
          'purchase_amount': 500000,
          'expected_earnings': '6.30%',
          'deadline': '3个月'
        }, {'purchase_amount': 500000, 'expected_earnings': '8.50%', 'deadline': '6个月'}, {
          'purchase_amount': 500000,
          'expected_earnings': '9.28%',
          'deadline': '12个月'
        }]
      }, {
        'name': '余利宝',
        'description': '由天弘基金联手网商银行推出的企业版余额宝',
        'detail': '<p>【1】近10倍银行活期利率；</p><p>【2】安全性高，直接投入银行资产，有阿里巴巴信誉背书；</p><p>【3】1元起投，由网商银行保障产品的流动性，提现支持T+0，两小时内到账。</p>',
        'items': [{'purchase_amount': 1, 'expected_earnings': '2.3-3%', 'deadline': '无固定期限'}]
      }, {
        'name': '轻松投',
        'description': '轻松投（企业版）是积木盒子面向有一定“现金流规划”的企业用户提供的高效投资工具',
        'detail': '<p>【1】合规透明：交易资金由银行全程存管，账户安全无忧；</p><p>【2】精选资产：大数据驱动风险决策+“穹顶计划”保障，双重保护实现历史100%兑付；</p><p>【3】投资便捷：线上开户，线上投资，线上实时查收益。24小时开放，到期提现T+1日到账；</p><p>【4】灵动丰收：多种期限灵活可选，预期收益可观。</p><pstyle=\'font-size:12px;color:#666;padding-left:5px;padding-top:10px;\'>披露:相关数据仅作为历史业绩描述，不作为未来业绩承诺,“轻松投”虽好也要理性判断，投资有风险请谨慎选择</p>',
        'items': [{
          'purchase_amount': 300000,
          'expected_earnings': '5.80%',
          'deadline': '15天'
        }, {'purchase_amount': 300000, 'expected_earnings': '7.50%', 'deadline': '1.5个月'}, {
          'purchase_amount': 300000,
          'expected_earnings': '7.54%',
          'deadline': '3个月'
        }, {'purchase_amount': 300000, 'expected_earnings': '8.50%', 'deadline': '6个月'}, {
          'purchase_amount': 300000,
          'expected_earnings': '9.50%',
          'deadline': '12个月'
        }]
      }]
    }
  }

  render() {
    return <Base>
      {this.state.products.map((group, i) =>
        <div className='panel panel-default' key={i}>
          <div className='panel-heading'>
            <h4>{group.name}
              <small>{group.description}</small>
            </h4>
          </div>
          <div className='panel-body'>
            <Tabs id={'tabs-' + i} defaultActiveKey={0}>
              <Tab title='产品介绍' eventKey={0}>
                <table className='table product-list'>
                  <thead>
                  <tr>
                    <th>起购金额</th>
                    <th>预计收益率</th>
                    <th>期限</th>
                    <th>推荐评分</th>
                    <th/>
                  </tr>
                  </thead>
                  <tbody>
                  {group.items.map((item, i) => <tr key={i}>
                    <td>{item.purchase_amount}元</td>
                    <td>{item.expected_earnings}</td>
                    <td>{item.deadline}</td>
                    <td>
                      <span className='glyphicon glyphicon-star'/>
                      <span className='glyphicon glyphicon-star'/>
                      <span className='glyphicon glyphicon-star'/>
                      <span className='glyphicon glyphicon-star'/>
                      <span className='glyphicon glyphicon-star-empty'/>
                    </td>
                    <td className='text-right'><button className='btn btn-default btn-xs' onClick={() => alert('待实现')}>立即购买</button></td>
                  </tr>)}
                  </tbody>
                </table>
              </Tab>
              <Tab title='细节描述' eventKey={1}>
                <div className='product-detail' dangerouslySetInnerHTML={{__html: group.detail}}/>
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
    </Base>
  }
}