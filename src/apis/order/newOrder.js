import request from '../../utils/http.js'

export const newOrder = (data,token) => {
  return request({
    url: '/api/market/product/create',
    method: 'post',
	headers: {
	      'Authorization': `Bearer ${token}`
	},
    data
  })
}