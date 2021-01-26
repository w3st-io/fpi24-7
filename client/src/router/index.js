// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import Index from '../pages'
import About from '../pages/about'
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
			name: 'About',
			component: About,
			meta: {
				auth: true,
				title: 'About'
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
	document.title = to.meta.title
	next()
})


export default router
