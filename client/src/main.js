// [IMPORT] //
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import Editor from 'vue-editor-js/src/index'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


// [USE] //
Vue.use(Editor)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// [EXPORT] EventBus //
export const EventBus = new Vue()


// [CONFIG + RENDER] //
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
