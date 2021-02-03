<template>
	<nav
		class="bg-dark shadow nav-drawer-menu"
		:class="{ isOpen: sideMenuOpen }"
	>
		<BButton
			v-show="sideMenuOpen"
			variant="primary"
			class="w-100 mb-3 text-light"
			@click="closeMenu"
		><span aria-hidden="true" style="font-size: 2em;">&times;</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="home()"
		><span aria-hidden="true" style="font-size: 1.5em;">Home</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="about()"
		><span aria-hidden="true" style="font-size: 1.5em;">About</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="design()"
		><span aria-hidden="true" style="font-size: 1.5em;">Design</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="installs()"
		><span aria-hidden="true" style="font-size: 1.5em;">Installs</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="service()"
		><span aria-hidden="true" style="font-size: 1.5em;">Service</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="contactUs()"
		><span aria-hidden="true" style="font-size: 1.5em;">Contact Us</span></BButton>
		

		<SocialMediaPlug v-show="sideMenuOpen" size="48" class="my-3" />
	</nav>
</template>

<script>
	// [IMPORT] //
	import { EventBus } from '../../main'
	import router from '../../router'
	import SocialMediaPlug from '../SocialMediaPlug'

	// [EXPORT] //
	export default {
		props: {
			sideMenuOpen: {
				type: Boolean,
				required: true,
			}
		},

		components: {
			SocialMediaPlug,
		},

		data() {
			return {
				query: ''
			}
		},

		created() {
			// [ON-EVENTBUS] //
			EventBus.$on('navBarSideMenuBtnClicked', () => {
				this.sideMenuOpen = !this.sideMenuOpen
			})
		},

		methods: {
			closeMenu() {
				this.sideMenuOpen = !this.sideMenuOpen
				this.$emit('closeMenu')
			},

			home() {
				router.push({ name: '/' })
				this.closeMenu()
			},

			about() {
				router.push({ name: 'about' })
				this.closeMenu()
			},

			design() {
				router.push({ name: 'design' })
				this.closeMenu()
			},

			installs() {
				router.push({ name: 'installs' })
				this.closeMenu()
			},

			service() {
				router.push({ name: 'service' })
				this.closeMenu()
			},

			contactUs() {
				router.push({ name: 'contact-us' })
				this.closeMenu()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;
		transition: 0.5s;
	}

	.nav-drawer-menu button {
		transition: 0.3s;
		font-size: 2em;

		&:hover { background: #212529; }
	}
	
	.isOpen { width: 75%; }
</style>