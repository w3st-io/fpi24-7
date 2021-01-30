<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" v-rellax="{ speed: 10 }" class="my-4">
				<!-- Row 1 -->
				<BRow>
					<BCol cols="12" sm="8" class="">
						<h1 class="m-0 text-primary text-center">
							{{ defaultData.r1.c1.title }}
						</h1>
					</BCol>

					<BCol cols="12" sm="4" class="text-center" v-rellax="{ speed: 2 }" >
						<img
							:src="defaultData.r1.c2.image"
							class="d-none d-sm-block w-100 p-3 bg-white rounded-lg shadow"
						>
					</BCol>

				</BRow>

				<!-- Row 2 -->
				<BRow class="my-4">
					<BCol cols="12" lg="6" class="mb-3">
						<h3 class="text-primary text-center">
							{{ defaultData.r2.c1.title }}
						</h3>
						<a :href="defaultData.r2.c1.phoneNumberLink">
							<BButton pill class="my-3 w-100">
								Call Us: {{ defaultData.r2.c1.phoneNumber }}
							</BButton>
						</a>

						<a :href="defaultData.r2.c1.faxNumberLink">
							<BButton pill class="my-3 w-100">
								Fax Us: {{ defaultData.r2.c1.faxNumber }}
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" lg="6" class="mb-3">
						<h3 class="text-primary text-center">
							{{ defaultData.r2.c2.title }}
						</h3>

						<a
							:href="defaultData.r2.c2.googleMapsLink"
							class="text-center text-dark"
						>
							<h5 class="mb-3">{{ defaultData.r2.c2.address }}</h5>

							<BCard variant="bg-white" class="mx-5 p-1 shadow">
								<img
									:src="defaultData.r2.c2.googleMapsImage"
									alt="Google maps image here"
									class="w-100"
								>
							</BCard>
						</a>
					</BCol>
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '../components/display/Parallax'
	import defaultData from '../defaults/pages/contact-us'
	import router from '../router'

	export default {
		components: {
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