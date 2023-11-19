import request from '../../utils/http.js'


	
export  const UserRegister = (data)=>{
	// return console.log(data)
	return request({
		url: '/api/auth/register',
		method: 'post',
		data
	})
}