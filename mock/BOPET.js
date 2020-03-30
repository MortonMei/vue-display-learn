import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    forecast: 'PP期货震荡走势给现货市场指引不足，石化库存压力较大，市场成交零星，价格延续弱势，膜厂部分刚刚回归，对原料走势持观望态度；BOPP下游用户回归不多，今日暂未听闻有成交量',
    prices: { 镀铝基材: { price: '@integer(9000,12000)' }, 烫金膜: { price: '@integer(9000,12000)' }, 转移膜: { price: '@integer(9000,12000)' }, 厚膜: { price: '@integer(9000,12000)' }},
    date: '@date',
    title: '【BOPP日评】部分恢复开工　膜厂成交零星20.02.10'
  }]
})

export default [
  {
    url: '/vue-admin-template/BOPET/list',
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
