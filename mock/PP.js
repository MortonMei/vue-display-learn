import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    eur: '@integer(30, 50)',
    date: '@date',
    usd: '@integer(30, 50)'
  }]
})

export default [
  {
    url: '/vue-admin-template/ER/list',
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
