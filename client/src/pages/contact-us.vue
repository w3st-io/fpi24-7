<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" class="my-4" v-rellax="{ speed: 3 }">
				<!-- [R1] -->
				<BRow class="mb-4">
					<!-- Main Title -->
					<BCol cols="12" md="8">
						<h1 class="m-0 text-primary text-center">
							{{ defaultData.cnt1.r1.c1.title }}
						</h1>
					</BCol>

					<!-- Title Image -->
					<BCol cols="12" sm="4" class="text-center" v-rellax="{ speed: .5 }" >
						<img
							:src="defaultData.cnt1.r1.c2.image"
							class="d-none d-md-block w-100 p-3 bg-white rounded-lg shadow"
						>
					</BCol>
				</BRow>

				<!-- [R2] -->
				<BRow class="mb-4">
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

						<!-- Get a Quote -->
						<BRow class="mt-3">
							<!-- Get a Quote -->
							<BCol cols="12" class="mt-3">
								<h3 class="text-center text-primary">
									<GetQuote :title="defaultData.cnt1.r2.c1.r2.c1.title" />
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

							<BCard variant="bg-white" class="shadow">
								<iframe
									:src="defaultData.cnt1.r2.c2.googleMapsEmbed"
									width="100%"
									height="450"
									style="border:0;"
									allowfullscreen=""
									loading="lazy"
								></iframe>
							</BCard>
						</a>
					</BCol>
				</BRow>

				<!-- [R3] -->
				<BRow class="mb-4">
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
	import GetQuote from '@/components/company/GetQuote'
	import Parallax from '@/components/display/Parallax'
	import defaultData from '@/defaults/pages/contact-us'
	import router from '@/router'

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