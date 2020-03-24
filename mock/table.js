import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    eur: '@integer(30, 50)',
    // title: '@sentence(10, 1)',
    // 'status|1': ['published', 'draft', 'deleted'],
    date: '@date',
    usd: '@integer(30, 50)'
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
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
