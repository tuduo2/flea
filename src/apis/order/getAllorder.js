import request from '../../utils/http.js'

export const getAllOrderList = (user = '1') => {
  return request({
    url: '/api/market/product/list',
    method: 'get',
    params: {
      user: user
    }
  })
}