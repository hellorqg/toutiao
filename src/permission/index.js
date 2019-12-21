// 专门处理路由拦截器
import router from '../router'

router.beforeEach(function (to, from, next) {
  // 判断路径 如果包含/home则拦截判断是否有token
  if (to.path.startsWith('/home')) {
    // 再判断
    if (window.localStorage.getItem('user-token')) {
      next()
    } else {
      next('/login')
    }
  } else { // 路径中不以 /home 开头则放过
    next()
  }
})

// router.beforeEach(function (to, from, next) {
//   // 权限拦截 认为有token 让过去 没token不让过
//   if (to.path.startsWith('/home')) {
//     //   确定要去检查的范围
//     let token = window.localStorage.getItem('user-token')
//     if (token) {
//       next() // 放过
//     } else {
//       next('/login') // 跳转到登录页
//     }
//   } else {
//     next() // 直接放过
//   }
// })
