import request from '../../utils/http.js'

export const searchIdOrder = (data) => {
  return request({
    url: '/api/market/product',
    method: 'get',
    params: {
      id: data
    }
  })
}