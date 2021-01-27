<template>
	<nav
		class="bg-dark shadow nav-drawer-menu"
		:class="{ isOpen: sideMenuOpen }"
	>
		<BButton
			v-show="sideMenuOpen"
			variant="outline-primary"
			class="w-100 my-3 p-2"
			@click="closeMenu"
		>
			<span aria-hidden="true" style="font-size: 2em;">&times;</span>
		</BButton>

		<RouterLink v-show="sideMenuOpen" to="/" class="h1" @click="homeBtn()">
			Home
		</RouterLink>
	</nav>
</template>

<script>
	// [IMPORT] //
	import { EventBus } from '../../main'
	import router from '../../router'

	// [EXPORT] //
	export default {
		props: {
			sideMenuOpen: {
				type: Boolean,
				required: true,
			}
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

			homeBtn() {
				this.sideMenuOpen = !this.sideMenuOpen
				router.push({ name: '/' })
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: absolute;
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