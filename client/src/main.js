// [IMPORT] //
import aos from 'aos'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import Editor from 'vue-editor-js/src/index'
import Viewer from 'v-viewer'
import VueRellax from 'vue-rellax'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueLazyload from 'vue-lazyload'
import 'aos/dist/aos.css'
import 'tiny-slider/src/tiny-slider.scss'
import 'viewerjs/dist/viewer.css'

// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


// [USE] //
Vue.use(Editor)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Viewer)
Vue.use(VueRellax)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('./assets/media/err.png'),
	loading: require('./assets/media/loading.gif'),
	attempt: 1
})
Vue.use(VueYouTubeEmbed)


// [EXPORT] EventBus //
export const EventBus = new Vue()


// [CONFIG + RENDER] //
Vue.config.productionTip = false
new Vue({
  router,
  created() { aos.init() },
  render: h => h(App)
}).$mount('#app')
