import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    index: '@integer(30, 50)',
    rate: '@integer(30, 50)',
    count: '@integer(100, 150)',
    time: '@date'
  }]
})

export default [
  {
    url: '/vue-admin-template/PPI/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
