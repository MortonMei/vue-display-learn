import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    price: '@integer(1000, 1700)',
    date: '@date',
    stock: '@integer(100000, 110000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/AL/list',
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
