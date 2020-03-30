import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    price: '@integer(6500, 7000)',
    date: '@date'
  }]
})

export default [
  {
    url: '/vue-admin-template/LLDPE/list',
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
