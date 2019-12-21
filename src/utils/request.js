// 封装axios
import axios from 'axios'
// 单独引用router
import router from '../router'
import { Message } from 'element-ui'
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
// 成功进入这个函数
axios.interceptors.response.use(function (response) {
//   console.log(response)
  return response.data ? response.data : {}
},
// 失败进入这个函数
function (error) {
//   debugger
  console.log(error)
  //   状态码
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break

    case 403 || 401: // token 过期或未携带
    //   返回登录重新获取token 返回之前删除原来的
      window.localStorage.removeItem('user-token')
      router.path('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break

    default:
      break
  }
  //   提示上面状态码时的弹窗信息
  Message({ type: 'warning', message })
})

// axios更改过后导出 修改所有的axios
export default axios
