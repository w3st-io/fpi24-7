<template>
	<div id="app" :key="appKey" class="bg-light">
		<!-- Navbar -->
		<NavBar v-if="showNav" />

		<!-- Router -->
		<RouterView :key="$route.name + ($route.params.id || '')" />

		<!-- Footer -->
		<Footer v-if="showNav" />

		<!-- Socket -->
		<Socket />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Footer from '@/components/nav/Footer'
	import NavBar from '@/components/nav/NavBar'
	import Socket from '@/components/socket'
	import { EventBus } from '@/main'
	import Service from '@/services/Service'

	export default {
		components: {
			Footer,
			NavBar,
			Socket,
		},

		data() {
			return {
				appKey: 0,
				reqData: {},
			}
		},

		computed: {
			showNav() {
				if (
					this.$route.name + (this.$route.params.id || '') == 'billboard'
				) { return false }
				else { return true }
			},
		},

		async created() {
			this.forceRerender()

			await this.setNodeEnv()

			EventBus.$on('force-rerender', () => { this.forceRerender() })

			// [LOG] //
			this.log()
		},

		methods: {
			forceRerender() { this.appKey++ },

			async setNodeEnv() {
				try {
					this.reqData = await Service.index()

					if (this.reqData.status) {
						localStorage.setItem('node_env', this.reqData.node_env)
					}	
				}
				catch (err) { console.log(`App: Error --> ${err}`) }
			},

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
	// [IMPORT] // Cuprum // Zilla Slab //
	@import url('https://fonts.googleapis.com/css2?family=Cuprum&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');

	* { font-family: 'Cuprum', 'Zilla Slab', sans-serif !important; }

	h1, h2, h3, h4, h5, h6, button {
		font-family: 'Cuprum', 'Zilla Slab', sans-serif !important;
	}
</style>