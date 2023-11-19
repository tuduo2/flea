import request from '../../utils/http.js'

export const unListOrder = (data,token) => {
  return request({
    url: '/api/market/product/unpublish',
    method: 'put',
	headers: {
	      'Authorization': `Bearer ${token}`
	},
    params:{
		id:data
	}
  })
}