import request from '../../utils/http.js'

export const sellOrder = (data,token) => {
  return request({
    url: '/api/market/product/sell',
    method: 'put',
	  headers: {
	      'Authorization': `Bearer ${token}`
	  },
    params:{
		id:data
	}
  })
}