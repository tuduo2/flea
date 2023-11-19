import request from '../../utils/http.js'

export const getAllOrderList = (user = '') => {
  return request({
    url: '/api/market/product/list',
    method: 'get',
    params: {
      user: user
    }
  })
}