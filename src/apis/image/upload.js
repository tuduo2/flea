import request from '../../utils/http.js'

export  const Upload = (data,token)=>{
	// return console.log(data)
	return request({
		url: '/api/asset/image/upload',
		headers: {
		      'Authorization': `Bearer ${token}`,
					'Content-Type': 'multipart/form-data'
		},
		data
	})
}