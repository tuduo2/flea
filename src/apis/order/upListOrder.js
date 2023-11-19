import request from '../../utils/http.js'

export const upListOrder = (data,token) => {
  return request({
    url: '/api/market/product/publish',
    method: 'put',
	headers: {
	      'Authorization': `Bearer ${token}`
	},
    params:{
		id:data
	}
  })
}