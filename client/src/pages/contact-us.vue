<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" v-rellax="{ speed: 10 }" class="my-4">
				<!-- Row 1 -->
				<BRow>
					<!-- Main Title -->
					<BCol cols="12" sm="8" class="">
						<h1 class="m-0 text-primary text-center">
							{{ defaultData.cnt1.r1.c1.title }}
						</h1>
					</BCol>

					<!-- Title Image -->
					<BCol cols="12" sm="4" class="text-center" v-rellax="{ speed: 2 }" >
						<img
							:src="defaultData.cnt1.r1.c2.image"
							class="d-none d-sm-block w-100 p-3 bg-white rounded-lg shadow"
						>
					</BCol>

				</BRow>

				<!-- Row 2 -->
				<BRow class="my-4">
					<BCol cols="12" lg="6" class="mb-3">
						<!-- Call Us & fax Us -->
						<BRow class="mb-3">
							<BCol cols="12">
								<!-- Title -->
								<h3 class="text-primary text-center">
									{{ defaultData.cnt1.r2.c1.r1.c1.title }}
								</h3>

								<!-- Phone # -->
								<a :href="defaultData.cnt1.r2.c1.r1.c1.phoneNumberLink">
									<BButton variant="primary" size="lg" pill class="my-3 w-100">
										Call Us: {{ defaultData.cnt1.r2.c1.r1.c1.phoneNumber }}
									</BButton>
								</a>

								<!-- Fax # -->
								<a :href="defaultData.cnt1.r2.c1.r1.c1.faxNumberLink">
									<BButton variant="secondary" size="lg" pill class="my-3 w-100">
										Fax Us: {{ defaultData.cnt1.r2.c1.r1.c1.faxNumber }}
									</BButton>
								</a>
							</BCol>
						</BRow>

						<!-- Send us an Email + Get Quote -->
						<BRow class="mt-3">
							<!-- Title -->
							<BCol cols="12">
								<h3 class="text-center text-primary">
									{{ defaultData.cnt1.r2.c1.r2.c1.title }}
								</h3>
							</BCol>

							<!-- Emails Contact -->
							<BCol
								v-for="(col, index) in defaultData.cnt1.r2.c1.r2.cx"
								:key="index"
								cols="12" md="6"
								class="mb-3"
							>
								<a :href="col.link">
									<BButton variant="primary" size="lg" pill class="w-100">
										{{ col.title }}
									</BButton>
								</a>
							</BCol>

							<!-- Get Quote -->
							<BCol cols="12" class="mt-3">
								<h3 class="text-center text-primary">
									<GetQuote />
								</h3>
							</BCol>
						</BRow>
					</BCol>

					<!-- Our Location -->
					<BCol cols="12" lg="6" class="mb-3">
						<h3 class="text-primary text-center">
							{{ defaultData.cnt1.r2.c2.title }}
						</h3>

						<a
							:href="defaultData.cnt1.r2.c2.googleMapsLink"
							class="text-center text-dark"
						>
							<h5 class="mb-3">{{ defaultData.cnt1.r2.c2.address }}</h5>
							
							<div class="mb-3">
								<BButton variant="primary" size="lg" pill>
									Open Google Maps
								</BButton>
							</div>

							<BCard variant="bg-white" class="mx-5 p-1 shadow">
								<img
									:src="defaultData.cnt1.r2.c2.googleMapsImage"
									alt="Google maps image here"
									class="w-100"
								>
							</BCard>
						</a>
					</BCol>
				</BRow>

				<!-- Row 3 -->
				<BRow class="my-4">
					<BCol>
						<h3 class="text-center text-primary">
							{{ defaultData.cnt1.r3.c1.title }}
						</h3>
					</BCol>
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '../components/display/Parallax'
	import GetQuote from '../components/GetQuote'
	import defaultData from '../defaults/pages/contact-us'
	import router from '../router'

	export default {
		components: {
			GetQuote,
			Parallax,
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},

		methods: {
			redirect() {
				router.push({
					name: 'post',
					params: {
						sort: 1,
						limit: 5,
						page: 1,
					},
				})
			}
		},
	}
</script>