import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/BOPP/list',
    method: 'get',
    params
  })
}
