// 封装axios
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截
axios.interceptors.request.use(function (config) {
  // config 是axios的默认参数 里面包含请求配置信息
//    给config注入token
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function () {})

// 响应拦截器
axios.interceptors.response.use(function (response) {
//   console.log(response)

  return response.data ? response.data : {}
}, function () {

})

// axios更改过后导出 修改所有的axios
export default axios
