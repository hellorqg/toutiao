import layouAside from './layou-aside.vue'
import layouHeader from './layou-header.vue'

export default {
  install (Vue) {
    Vue.component('layouAside', layouAside)
    Vue.component('layouHeader', layouHeader)
  }
}
