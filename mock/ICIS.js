import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    priceMax: '@integer(950, 1000)',
    date: '@date',
    priceMin: '@integer(900, 950)'
  }]
})

export default [
  {
    url: '/vue-admin-template/ICIS/list',
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
