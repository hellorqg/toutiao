import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './permission'
import axios from 'axios'
import components from './components/home'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
// 全局
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(components)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
