<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" class="my-4" v-rellax="{ speed: 3 }">
				<!-- [R1] Page Title -->
				<BRow>
					<BCol cols="12" md="7" lg="8" >
						<h2 class="text-primary">{{ defaultData.r1.c1.title }}</h2>
						<p class="h4">{{ defaultData.r1.c1.description }}</p>
					</BCol>

					<BCol
						cols="12" md="5" lg="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed=".5"
					>
						<img :src="defaultData.r1.c2.image" class="w-100 rounded-lg">
					</BCol>
				</BRow>

				<!-- [R2] Title -->
				<BRow>
					<BCol cols="12" md="12" class="my-4">
						<BCard no-body bg-variant="primary" class="py-2 text-light">
							<h2 class="m-0 text-center">
								{{ defaultData.r2.c1.title }}
							</h2>
						</BCard>
					</BCol>
				</BRow>

				<!-- [R3] -->
				<BRow>
					<BCol
						cols="12" md="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="-1"
						data-aos="fade-down"
					>
						<img
							:src="defaultData.r3.c1.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
					</BCol>

					<BCol cols="12" md="8" class="mt-3">
						<h3 class="text-primary">{{ defaultData.r3.c2.title }}</h3>
						<p class="h4 mb-3">{{ defaultData.r3.c2.description }}</p>

						<h4 class="text-primary">
							{{ defaultData.r3.c2.listTitle }}
						</h4>

						<ul class="mb-4">
							<li v-for="(li, index) in defaultData.r3.c2.list" :key="index">
								<p class="h5">{{ li }}</p>
							</li>
						</ul>
					</BCol>
				</BRow>

				<!-- [R4] -->
				<BRow class="bg-light">
					<BCol cols="12" md="7" lg="8" class="mt-3">
						<h3 class="text-primary">{{ defaultData.r4.c1.title }}</h3>
						<p class="h4 mb-3">{{ defaultData.r4.c1.description }}</p>

						<h4 class="text-primary">
							{{ defaultData.r4.c1.listTitle }}
						</h4>

						<ul class="mb-4">
							<li v-for="(li, index) in defaultData.r4.c1.list" :key="index">
								<p class="h5">{{ li }}</p>
							</li>
						</ul>
					</BCol>
					<BCol cols="12" md="5" lg="4" data-aos="fade-down">
						<img
							:src="defaultData.r4.c2.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
					</BCol>
				</BRow>

				<!-- [R5] -->
				<BRow class="bg-light">
					<BCol cols="12" class="mt-3">
						<h3 class="text-primary">{{ defaultData.r5.c1.title }}</h3>
						<p class="h4">{{ defaultData.r5.c1.description }}</p>
					</BCol>
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Parallax from '../components/display/Parallax'
	import defaultData from '../defaults/pages/installs'
	import router from '../router'

	export default {
		components: {
			Parallax
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