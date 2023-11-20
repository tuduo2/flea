import request from '../../utils/http.js'

export  const UserLogin = (data)=>{
	// return console.log(data)
	return request({
		url: '/api/auth/login',
		method: 'post',
		data
	})
}