import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    forecast: 'PP期货震荡走势给现货市场指引不足，石化库存压力较大，市场成交零星，价格延续弱势，膜厂部分刚刚回归，对原料走势持观望态度；BOPP下游用户回归不多，今日暂未听闻有成交量',
    prices: { 西南地区: { 价格: '@integer(9000,12000)', 日涨跌: -300, 较上周同期: 0 }, 华北地区: { 价格: '@integer(9000,12000)', 日涨跌: -500, 较上周同期: -1650 }, 华东地区: { 价格: '@integer(9000,12000)', 日涨跌: -500, 较上周同期: 0 }, 东北地区: { 价格: '@integer(9000,12000)', 日涨跌: -400, 较上周同期: 0 }, 华南地区: { 价格: '@integer(9000,12000)', 日涨跌: -500, 较上周同期: 0 }},
    date: '@date',
    title: '【BOPP日评】部分恢复开工　膜厂成交零星20.02.10'
  }]
})

export default [
  {
    url: '/vue-admin-template/BOPP/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: items
      }
    }
  }
]
