import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './permission' // 调用导航守卫
import axios from './utils/request' // 调用修改后的axios
import components from './components/home' // 全局注册组件
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
Vue.prototype.$axios = axios
// 全局
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(components)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
