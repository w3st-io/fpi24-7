<template>
	<div id="app" :key="appKey">
		<NavBar @menu-btn-clicked="toggle()" />

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />

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
	import SideMenu from '@/components/nav/SideMenu'
	import Service from './services/Service'
	import { EventBus } from './main'


	export default {
		components: {
			Footer,
			NavBar,
			SideMenu
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

				// [MENU] //
				sideMenuOpen: false
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

			toggle() { this.sideMenuOpen = !this.sideMenuOpen },

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
	@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

	@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,500;1,300&display=swap');

	h1, h2, h3, h4, h5, h6, button {
		font-family: 'Archivo Black', sans-serif !important;
	}

	* { font-family: 'Prompt', sans-serif !important; }
</style>