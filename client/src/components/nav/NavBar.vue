<template>
	<div class="w-100 py-3 text-dark shadow position-absolute nav">
		<BContainer>
			<BRow>
				<!-- Logo -->
				<BCol cols="xl">
					<RouterLink to="/" class="text-center text-weight-bold text-decoration-none">
						<img
							:src="companyInfo.companyLogo"
							class="d-none d-xl-block p-1 rounded-lg"
							style="max-width: 110px;"
						>
					</RouterLink>
				</BCol>

				<!-- Title & Nav Buttons -->
				<BCol cols="12" xl="8">
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

					<div class="mb-3 d-none d-md-block text-center">

						<RouterLink
							v-for="(button, i) in buttons"
							:key="i"
							:to="button.path"
						>
							<!-- Menu Items -->
							<BButton
								variant="primary"
								size="sm"
								class="font-weight-bold mx-2"
							>{{ button.text }}</BButton>
						</RouterLink>
					</div>
				</BCol>

				<!-- Call Us -->
				<BCol cols="xl">
					<SocialMediaPlug size="34" class="d-none d-md-block mb-3" />

					<a :href="companyInfo.phoneNumberLink">
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
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'

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
				sideMenuOpen: false,
				buttons: buttons,
			}
		},

		methods: {
			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>

<style lang="scss" scoped>
	.nav {
		top: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.726) !important;
	}
</style>