import request from '../../utils/http.js'

export const upOrder = (data,token) => {
  return request({
    url: '/api/market/product/update',
    method: 'put',
	headers: {
	      'Authorization': `Bearer ${token}`
	},
    data
  })
}