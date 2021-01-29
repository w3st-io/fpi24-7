// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import Index from '../pages'
import About from '../pages/about'
import Design from '../pages/design'
import Installs from '../pages/installs'
import Service from '../pages/service'
import NotFound from '../pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',

	routes: [
		{
			path: '/',
			name: '/',
			component: Index,
			meta: {
				auth: true,
				title: 'Home'
			},
		},
		// About //
		{
			path: '/about',
			name: 'about',
			component: About,
			meta: {
				auth: true,
				title: 'About'
			},
		},
		// Design //
		{
			path: '/design',
			name: 'design',
			component: Design,
			meta: {
				auth: true,
				title: 'Design'
			},
		},
		// Installs //
		{
			path: '/installs',
			name: 'installs',
			component: Installs,
			meta: {
				auth: true,
				title: 'Installs'
			},
		},
		// Service //
		{
			path: '/service',
			name: 'service',
			component: Service,
			meta: {
				auth: true,
				title: 'Service'
			},
		},
		// [404] //
		{
			path: '/**',
			name: '404',
			component: NotFound,
			meta: {
				auth: true,
				title: '404 Not Found..'
			},
		},
	]
})


// [VUE-ROUTER-SET-TITLE] //
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} - 24/7 Fire Protection Inc `
	next()
})


export default router
