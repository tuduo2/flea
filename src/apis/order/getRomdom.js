import request from '../../utils/http.js'

export const getRomOrder = (data) => {
  return request({
    url: '/api/market/product/listRandom',
    method: 'get',
    params: {
      count: data
    }
  })
}