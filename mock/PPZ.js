import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    price1: '@integer(7000, 7500)',
    producer1: '上海石化',
    date: '@date',
    price2: '@integer(6500, 7000)',
    producer2: '镇海炼化'
  }]
})

export default [
  {
    url: '/vue-admin-template/PPZ/list',
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
