import layouAside from './layou-aside.vue'
import layouHeader from './layou-header.vue'
import breadcrumb from '../common/breadcrumb.vue'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import cover from '../cover'
export default {
  install (Vue) {
    Vue.component('layouAside', layouAside)
    Vue.component('layouHeader', layouHeader)
    Vue.component('breadcrumb', breadcrumb)
    Vue.component('quill-editor', quillEditor)
    Vue.component('cover', cover)
  }
}
