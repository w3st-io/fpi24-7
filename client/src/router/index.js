// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '../pages'
import about from '../pages/about'
import careers from '../pages/careers'
import careers_apply from '../pages/careers/apply'
import contactUs from '../pages/contact-us'
import design from '../pages/design'
import emailSent from '../pages/email-sent'
import gallery from '../pages/gallery'
import installs from '../pages/installs'
import payInvoice from '../pages/pay-invoice'
import service from '../pages/service'
import notFound from '../pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',

	routes: [
		{
			path: '/',
			name: '/',
			component: index,
			meta: {
				auth: true,
				title: 'Home'
			},
		},
		// About //
		{
			path: '/about',
			name: 'about',
			component: about,
			meta: {
				auth: true,
				title: 'About'
			},
		},
		// Careers //
		{
			path: '/careers',
			name: 'careers',
			component: careers,
			meta: {
				auth: true,
				title: 'Careers'
			},
		},
		{
			path: '/careers/apply',
			name: 'careers_apply',
			component: careers_apply,
			meta: {
				auth: true,
				title: 'apply'
			},
		},
		// Contact Us //
		{
			path: '/contact-us',
			name: 'contact-us',
			component: contactUs,
			meta: {
				auth: true,
				title: 'Contact Us'
			},
		},
		// Design //
		{
			path: '/design',
			name: 'design',
			component: design,
			meta: {
				auth: true,
				title: 'Design'
			},
		},
		// Email //
		{
			path: '/email-sent',
			name: 'email-sent',
			component: emailSent,
			meta: {
				auth: true,
				title: 'Email Sent'
			},
		},
		// Gallery //
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
			meta: {
				auth: true,
				title: 'Gallery'
			},
		},
		// Installs //
		{
			path: '/installs',
			name: 'installs',
			component: installs,
			meta: {
				auth: true,
				title: 'Installs'
			},
		},
		// PAY-INVOICE //
		{
			path: '/pay-invoice',
			name: 'pay-invoice',
			component: payInvoice,
			meta: {
				auth: true,
				title: 'Pay Invoice'
			},
		},
		// Service //
		{
			path: '/service',
			name: 'service',
			component: service,
			meta: {
				auth: true,
				title: 'Service'
			},
		},
		// [404] //
		{
			path: '/**',
			name: '404',
			component: notFound,
			meta: {
				auth: true,
				title: '404 Not Found..'
			},
		},
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior() { return { x: 0, y: 0 } }
})


// [VUE-ROUTER] Set Title //
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} - 24/7 Fire Protection Inc `
	next()
})


export default router
