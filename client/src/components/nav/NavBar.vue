<template>
	<div class="w-100 py-3 text-dark shadow position-absolute nav">
		<BContainer>
			<BRow>
				<!-- Logo -->
				<BCol cols="lg">
					<RouterLink to="/" class="text-center text-weight-bold text-decoration-none">
						<img
							:src="companyInfo.companyLogo"
							class=" d-none d-lg-block p-1 bg-light rounded-lg"
							style="max-width: 110px;"
						>
					</RouterLink>
				</BCol>

				<!-- Title & Nav Buttons -->
				<BCol cols="12" lg="7">
					<!-- Title + Caption -->
					<RouterLink to="/" class="text-center text-weight-bold text-decoration-none">
						<h3 class="text-light font-weight-bold">
							{{ companyInfo.companyName }}
						</h3>
						<h6
							v-html="companyInfo.companyCaption"
							class="h6 text-primary font-weight-bold"
						></h6>
					</RouterLink>

					<div  class="mb-3 d-none d-md-block text-center">
						<RouterLink to="/" class="text-dark">
							<BButton variant="primary" size="sm" class="font-weight-bold mx-2">
								Home
							</BButton>
						</RouterLink>

						<RouterLink to="/about" class="text-light">
							<BButton variant="primary" size="sm" class="font-weight-bold mx-2">
								About
							</BButton>
						</RouterLink>

						<RouterLink to="/design" class="text-dark">
							<BButton variant="primary" size="sm" class="font-weight-bold mx-2">
								Design
							</BButton>
						</RouterLink>

						<RouterLink to="/installs" class="text-dark">
							<BButton variant="primary" size="sm" class="font-weight-bold mx-2">
								Installs
							</BButton>
						</RouterLink>

						<RouterLink to="/service" class="text-dark">
							<BButton variant="primary" size="sm" class="font-weight-bold mx-2">
								Service
							</BButton>
						</RouterLink>

						<RouterLink to="/contact-us" class="text-dark">
							<BButton variant="primary" size="sm" class="font-weight-bold mx-2">
								Contact Us
							</BButton>
						</RouterLink>
					</div>
				</BCol>

				<!-- Call Us -->
				<BCol cols="lg">
					<SocialMediaPlug size="34" class="d-none d-md-block mb-3" />

					<a :href="companyInfo.phoneNumberLink" class="text-dark">
						<h4 class="text-center">
							<BButton variant="outline-light" class="mx-auto rounded-pill">
								Call Us: {{ companyInfo.phoneNumber }}
							</BButton>
						</h4>
					</a>
				</BCol>

				<!-- Hidden Side Menu Button -->
				<BCol cols="12" class="d-block d-md-none">
					<BButton
						variant="primary"
						class="w-100"
						@click="toggle()"
					><MenuIcon /></BButton>
				</BCol>
			</BRow>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '../../defaults/companyInfo'
	import SocialMediaPlug from '../SocialMediaPlug'

	export default {
		components: {
			SocialMediaPlug,
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