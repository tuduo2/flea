import request from '../../utils/http.js'

export const searchOrder = (data) => {
  return request({
    url: '/api/market/product/search',
    method: 'get',
    params: {
      keyword: data
    }
  })
}