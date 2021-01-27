<template>
	<div class="w-100 py-3 text-dark shadow position-absolute nav">
		<BContainer>
			<!-- Company Logo & Navbar Stuff -->
			<BRow>
				<!-- Company Logo -->
				<BCol cols="12" md="2" lg="1" class="d-none d-md-block text-center">
					<img
						:src="companyInfo.companyLogo"
						alt="Logo here"
						class="w-100 p-1 bg-light rounded-lg"
					>
				</BCol>

				<!-- Navbar Stuff -->
				<BCol cols="12" md="10" lg="11">
					<BRow>
						<!-- Title + Caption & Phone # -->
						<BCol cols="12">
							<!-- Title + Caption -->
							<RouterLink
								to="/"
								class="text-center text-uppercase text-decoration-none text-light"
							>
								<h4 class="font-weight-bold">
									{{ companyInfo.companyName }}
									<br>
									<span
										v-html="companyInfo.companyCaption"
										class="h6 font-weight-bold"
									></span>
								</h4>
							</RouterLink>

							<!-- Phone # -->
							<a :href="companyInfo.phoneNumberLink" class="text-dark">
								<h4 class="text-center">
									<BButton variant="outline-light" class="mt-3 mx-auto rounded-pill">
										Call Us: {{ companyInfo.phoneNumber }}
									</BButton>
								</h4>
							</a>
						</BCol>
					</BRow>
				</BCol>
					
				<BCol>
					<BRow>
						<!-- Links -->
						<BCol
							cols="12"
							class="mt-3 text-uppercase text-light text-center text-md-center"
						>
							<RouterLink to="/" class=" text-dark">
								<BButton variant="danger" class="mx-2">
									Home
								</BButton>
							</RouterLink>
							<span class="text-light">|</span>

							<RouterLink to="/about" class="text-light">
								<BButton variant="danger" class="mx-2">
									About
								</BButton>
							</RouterLink>
							<span class="text-light">|</span>

							<RouterLink to="/about" class="text-dark">
								<BButton variant="danger" class="mx-2">
									Design
								</BButton>
							</RouterLink>
							<span class="text-light">|</span>

							<RouterLink to="/about" class="text-dark">
								<BButton variant="danger" class="mx-2">
									Installs
								</BButton>
							</RouterLink>
							<span class="text-light">|</span>

							<RouterLink to="/about" class="text-dark">
								<BButton variant="danger" class="mx-2">
									Services
								</BButton>
							</RouterLink>
							<span class="text-light">|</span>

							<RouterLink to="/about" class="text-dark">
								<BButton variant="danger" class="mx-2">
									Contact Us
								</BButton>
							</RouterLink>
						</BCol>
					</BRow>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
				loggedIn: false,
				decoded: {},
			}
		},

		async created() {
		},

		methods: {
			menuBtnClicked() { this.$emit('menu-btn-clicked') },
		},
	}
</script>

<style lang="scss">
	.nav {
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.685) !important;
	}
</style>