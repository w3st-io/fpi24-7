<template>
	<div class="w-100 py-3 text-dark shadow position-absolute nav">
		<BContainer>
			<!-- Menu -->
			<BRow class="mb-3">
				<!-- Links -->
				<BCol
					cols="12"
					class="d-none d-md-block text-uppercase text-light text-center text-md-center"
				>
					<RouterLink to="/" class=" text-dark">
						<BButton variant="outline-primary" class="mx-2">
							Home
						</BButton>
					</RouterLink>
					<span class="text-light">|</span>

					<RouterLink to="/about" class="text-light">
						<BButton variant="outline-primary" class="mx-2">
							About
						</BButton>
					</RouterLink>
					<span class="text-light">|</span>

					<RouterLink to="/about" class="text-dark">
						<BButton variant="outline-primary" class="mx-2">
							Design
						</BButton>
					</RouterLink>
					<span class="text-light">|</span>

					<RouterLink to="/about" class="text-dark">
						<BButton variant="outline-primary" class="mx-2">
							Installs
						</BButton>
					</RouterLink>
					<span class="text-light">|</span>

					<RouterLink to="/about" class="text-dark">
						<BButton variant="outline-primary" class="mx-2">
							Services
						</BButton>
					</RouterLink>
					<span class="text-light">|</span>

					<RouterLink to="/about" class="text-dark">
						<BButton variant="outline-primary" class="mx-2">
							Contact Us
						</BButton>
					</RouterLink>
				</BCol>

				<!-- Hidden Side Menu Button -->
				<BCol cols="12" class="d-block d-md-none">
					<BButton
						variant="outline-primary"
						class="w-100"
						@click="toggle()"
					><MenuIcon /></BButton>
				</BCol>
			</BRow>

			<BRow>
				<!-- Logo & Title + Caption -->
				<BCol cols="12" class="d-none d-md-block text-center">
					<img
						:src="companyInfo.companyLogo"
						alt="Logo here"
						class="p-1 ml-auto mb-4 bg-light rounded-lg"
						style="max-width: 120px;"
					>
				</BCol>

				<BCol cols="12" class="text-center">
					<!-- Title + Caption -->
					<RouterLink
						to="/"
						class="text-uppercase text-decoration-none text-light"
					>
						<h4 class="mb-3 text-primary font-weight-bold">
							{{ companyInfo.companyName }}
							<br>
							<span
								v-html="companyInfo.companyCaption"
								class="h6 text-light font-weight-bold"
							></span>
						</h4>
					</RouterLink>		
				</BCol>

				<!-- Phone # -->
				<BCol cols="12">
					<a :href="companyInfo.phoneNumberLink" class="text-dark">
						<h4 class="text-center">
							<BButton variant="outline-light" class="mx-auto rounded-pill">
								Call Us: {{ companyInfo.phoneNumber }}
							</BButton>
						</h4>
					</a>
				</BCol>
			</BRow>

			
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '../../defaults/companyInfo'

	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				companyInfo: companyInfo,
				loggedIn: false,
				decoded: {},

				// [MENU] //
				sideMenuOpen: false
			}
		},

		methods: {
			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>

<style lang="scss">
	.nav {
		top: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.726) !important;
	}
</style>