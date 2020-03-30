import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    forecast: '今日国内PP市场震荡下滑，贸易商试探报价；CPP膜企暂未开工，观望浓厚，场内实单寥寥，预计短期CPP市场暂无实盘，价格参考节前。',
    prices1: { 华东地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -123 }, 华北地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -45 }},
    prices2: { 华南地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -273 }, 华东地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -123 }, 华北地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -166 }},
    prices3: { 华南地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -182 }, 华东地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -211 }, 华北地区: { 较上周同期: 0, 价格: '@integer(9000,12000)', 日涨跌: 0, 较上月同期: -198 }},
    date: '@date',
    title: '【CPP日评】原料震荡下滑　膜企推迟入市 20.02.04'
  }]
})

export default [
  {
    url: '/vue-admin-template/CPP/list',
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
