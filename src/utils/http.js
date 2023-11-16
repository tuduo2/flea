import axios from 'axios'
import { ElMessage } from 'element-plus'
const httpInstance = axios.create({
  baseURL: '/api',
  timeout: 5000
})
httpInstance.interceptors.request.use(
  config => {
    // 在发送请求之前做一些处理，比如添加请求头等
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);
// httpInstance.interceptors.response.use(res => res.data, e => {
//   // 统一错误提示
//   ElMessage({
//     type: 'warning',
//     message: e.response.data.message
//   })
//   return Promise.reject(e)
// })
export default httpInstance