import request from '../../utils/http.js'

export  const Getimg = (data,token)=>{
	// return console.log(data)
	return request({
		url: '/api/asset/image/fetch',
		method: 'get',
		headers: {
		    'Authorization': `Bearer ${token}`,
		},
		responseType: "blob",
		params:{
			id:data
		}
	})
}