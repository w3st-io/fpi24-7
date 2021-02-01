<template>
	<div id="app" :key="appKey" class="bg-light">
		<!-- Navbar -->
		<NavBar @menu-btn-clicked="toggle()" />

		<!-- Router -->
		<RouterView :key="$route.name + ($route.params.id || '')" />

		<Footer />
	</div>
</template>

<script>
	// [IMPORT] //
	import io from 'socket.io-client'


	// [IMPORT] Personal //
	import Footer from '@/components/nav/Footer'
	import NavBar from '@/components/nav/NavBar'
	import Service from './services/Service'
	import { EventBus } from './main'


	export default {
		components: {
			Footer,
			NavBar,
		},

		data() {
			return {
				// [APP] //
				appKey: 0,
				reqData: {},
				message: '',

				socket: 5000,

				// [USER] //
				adminLoggedIn: false,
				loggedIn: false,
				decoded: {},
			}
		},

		async created() {
			await this.setSocket()

			EventBus.$on('force-rerender', () => { this.forceRerender() })

			// [LOG] //
			this.log()
		},

		methods: {
			async setSocket() {
				try {
					this.reqData = await Service.getSocketBaseUrl()

					if (this.reqData) { this.socket = io(this.reqData) }
				}
				catch (err) { `App: Error --> ${err}` }				
			},

			forceRerender() { this.appKey++ },

			log() {
				console.log('%%% [APP] %%%')
				console.log('usertoken:', localStorage.usertoken)
				console.log('admintoken:', localStorage.admintoken)
				console.log('reqData:', this.reqData)
				console.log('socket:', this.socket)
				console.log('appKey:', this.appKey)
			}
		},
	}
</script>

<style lang="scss">
	// Cuprum // Zilla Slab //
	@import url('https://fonts.googleapis.com/css2?family=Cuprum&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');

	* { font-family: 'Cuprum', 'Zilla Slab', sans-serif !important; }

	h1, h2, h3, h4, h5, h6, button {
		font-family: 'Cuprum', 'Zilla Slab', sans-serif !important;
	}
</style>