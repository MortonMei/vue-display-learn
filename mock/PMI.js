import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    index1: '@integer(30, 50)',
    rate1: '@integer(30, 50)',
    index2: '@integer(30, 50)',
    rate2: '@integer(30, 50)',
    time: '@date'
  }]
})

export default [
  {
    url: '/vue-admin-template/pmi/list',
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
