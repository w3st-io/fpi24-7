// [IMPORT] //
import AOS from 'aos'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import Editor from 'vue-editor-js/src/index'
import VueRellax from 'vue-rellax'
import 'aos/dist/aos.css'
import 'tiny-slider/src/tiny-slider.scss'

// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


// [USE] //
Vue.use(Editor)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRellax)


// [EXPORT] EventBus //
export const EventBus = new Vue()


// [CONFIG + RENDER] //
Vue.config.productionTip = false
new Vue({
  router,
  created () { AOS.init() },
  render: h => h(App)
}).$mount('#app')
