import layouAside from './layou-aside.vue'
import layouHeader from './layou-header.vue'
import breadcrumb from '../common/breadcrumb.vue'

export default {
  install (Vue) {
    Vue.component('layouAside', layouAside)
    Vue.component('layouHeader', layouHeader)
    Vue.component('breadcrumb', breadcrumb)
  }
}
