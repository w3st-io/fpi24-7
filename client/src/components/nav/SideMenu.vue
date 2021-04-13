<template>
	<nav
		class="bg-dark shadow nav-drawer-menu"
		:class="{ isOpen: sideMenuOpen }"
	>
		<BButton
			v-show="sideMenuOpen"
			variant="primary"
			class="w-100 mb-3 p-4 text-light"
			@click="closeMenu()"
		><XIcon size="36" /></BButton>

		<RouterLink
			v-show="sideMenuOpen"
			v-for="(button, i) in buttons"
			:key="i"
			:to="button.path"
		>
			<!-- Menu Items -->
			<BButton
				variant="outline-seconadry"
				class="w-100 text-primary"
				@click="closeMenu()"
			>
				<p v-if="button.text" class="h1 my-1">{{ button.text }}</p>
				<span v-else v-html="button.sideMenuIcon"></span>
			</BButton>
		</RouterLink>
		
		<SocialMediaPlug v-show="sideMenuOpen" size="48" class="my-3" />
	</nav>
</template>

<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import router from '../../router'
	import SocialMediaPlug from '../SocialMediaPlug'
	import buttons from '@/defaults/pageLinks'

	// [EXPORT] //
	export default {
		props: {
			sideMenuOpen: {
				type: Boolean,
				required: true,
			}
		},

		components: {
			XIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				query: '',
				buttons: buttons,
			}
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

			careers() {
				router.push({ name: 'careers' })
				this.closeMenu()
			},

			gallery() {
				router.push({ name: 'gallery' })
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