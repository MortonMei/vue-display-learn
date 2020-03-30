import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    opening: '@integer(6500, 7000)',
    closing: '@integer(6500,7000)',
    high: '@integer(6500,7000)',
    low: '@integer(6500,7000)',
    volume: '@integer(10000,11000)',
    position: '@integer(10000,11000)',
    date: '@date'
  }]
})

export default [
  {
    url: '/vue-admin-template/PPO/list',
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
